/** 
 * Module dependencies
 */
var mongoose = require('mongoose'),
    async = require('async'),
    Item = mongoose.model('Item'),
    fs = require('fs'),
    path = require('path'),
    join = path.join,
    root = require('../../root'),
    Photo = mongoose.model('Photo'),
    crypto = require("crypto"),
    User = mongoose.model('User'),
    _ = require('underscore');

/**
 * Find items by ID
 */
exports.item = function(req, res, next, id) {

    Item.load(id, function(err, item) {
        if (err) return next(err);
        if (!item) return next(new Error('Failed to find item ' + id));

        req.item = item;

        next();
    });
};
/**
 * Upload the gear photo
 */
exports.upload = function(dir) {
    return function(req, res, next) {
        var img = req.files.file;
        var user = req.user;
        var old = img.originalFilename;
        var fileType = old.split('.');
        fileType = '.' + fileType[fileType.length - 1];
        var name = user._id + old;
        var exists = false;
        var path = root + '/public/img/uploads/';

        fs.exists(path, function(exists) {
            if (!exists) {
                fs.mkdirSync(path, '755');
            }
            var imgPath = join(path, name);
            fs.rename(img.path, imgPath, function(err) {
                if (err) return next(err);
                Photo.create({
                    name: name,
                    path: path
                }, function(err, name) {
                    // if (err) return next(err);
                    // im.resize({
                    //     srcPath: name,
                    //     dstPath: name,
                    //     width: 600
                    // }, function(err, stdout, stderr) {
                    //     if (err) throw err;
                    // });
                });
            });
        })
    };
};

/**
 *
 */
exports.create = function(req, res) {
    //find the item based on the client page
    var path = '/img/uploads/';
    var user = req.user;
    if (req.body.item.photo) {
        var old = req.body.item.photo.replace("C:\\fakepath\\", '');
        var fileType = old.split('.');
        fileType = '.' + fileType[fileType.length - 1];
        var name = '/img/uploads/' + user._id + old;
        req.body.item.photo = name;
    } else {
        req.body.item.photo = '/img/uploads/default.jpg';
    }
    var item = new Item(req.body.item);
    var exists = false;
    item.userid = req.user.id;
    item.username = req.user.username;
    item.user = req.user;
    item.save(function(err) {

        //create an object with the contents of 'item' inside
        var formattedItem = {};
        formattedItem.item = item;
        if (err) {
            //if we get an error send the user to the signup page
            return res.send('users/signup', {
                errors: err.errors,
                item: item
            });
        } else {
            //send that shit to the db
            res.jsonp(formattedItem);
        }

    });
    //Add the newly created id to the list of items this user owns
    user.itemids.push(item._id.valueOf());
    user.save(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            var userObj = {
                user: user
            };
        }
    });
};

/**
 * Update/Edit an Item
 */
exports.update = function(req, res) {

    var item = req.item;
    var user = req.user;
    var old = req.body.item.photo.replace("C:\\fakepath\\", '').replace('/img/uploads/' + user._id, '');
    var fileType = old.split('.');
    fileType = '.' + fileType[fileType.length - 1];
    var name = '/img/uploads/' + user._id + old;
    //this is all content from the page form
    item.name = req.body.item.name;
    item.itemDesc = req.body.item.itemDesc;
    item.type = req.body.item.type;
    item.rate = req.body.item.rate;
    item.value = req.body.item.value;
    //how am I going to handle black out dates?
    //item.BoD = req.body.item.BoD;
    item.brand = req.body.item.brand;
    item.photo = name;

    item.save(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            var itemObj = {
                item: item
            };
            res.send({
                item: item
            });
        }
    });
};


/**
 * Delete an item
 */
exports.destroy = function(req, res) {
    var item = req.item;
    var user = req.user;
    try {
        user.items.slice(user.items.indexOf(item._id), user.items.indexOf(item._id) + 1);
        user.save(function(err) {
            if (err) {
                res.render('error', {
                    status: 500
                });
            } else {
                var userObj = {
                    user: user
                };
            }
        });
    } catch (e) {
        console.log(e);
    }
    item.remove(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(item);
        }
    });
};

/**
 * Show an item
 */
exports.show = function(req, res) {
    res.send({
        item: req.item
    });
};



/**
 * List the Gear
 */
exports.index = function(req, res, next) {

    try {
        var split = req.query.urlSegment.split('/');
    } catch (e) {};
    if (split) {
        if (split[1] == 'user') {
            req.query = {
                userid: split[2]
            };
        }
    }

    if (!_.isEmpty(req.query)) {
        console.log(req.query.keyword);
        //format the search query from 'search'
        if (req.query.keyword) {
            var queries = req.query.keyword.split('&');
            var newSearch = {};
            for (i = 0; i < queries.length; i++) {
                var tempQuery = queries[i].split('=');
                newSearch[tempQuery[0]] = tempQuery[1];
                console.log(newSearch);
            }
            req.query = newSearch;
        }
        console.log(req.query);
        //req.query is the type of object which mongoose can use to search
        //this is responder to the search model that will work for the site
        //as a whole

        Item.find(req.query).sort('-added').populate('user', 'name username').exec(function(err, items) {
            if (err) {
                res.render('error', {
                    status: 500
                });
            } else {
                //console.log(items);
                res.send({
                    items: items
                });
            }
        });
    } else {
        //grab everything
        Item.find({}).sort('-added').populate('user', 'name username').exec(function(err, items) {
            if (err) {
                res.render('error', {
                    status: 500
                });
            } else {
                res.send({
                    items: items
                });
            }
        });
    }
};
/**
 * Search!
 */

exports.search = function(req, res) {
    console.log(params);
    console.log(query);
    if (!_.isEmpty(req.query)) {

        Item.find(req.query).sort('-added').populate('user', 'name username').exec(function(err, items) {
            if (err) {
                res.render('error', {
                    status: 500
                });
            } else {

                res.send({
                    items: items
                });
            }
        });
    }
}