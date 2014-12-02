/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    fs = require('fs'),
    path = require('path'),
    join = path.join,
    root = require('../../root'),
    Photo = mongoose.model('Photo'),
    User = mongoose.model('User');

/**
 * Auth callback
 */
exports.authCallback = function(req, res, next) {
    res.redirect('/');
};

/**
 * Show login form
 */
exports.signin = function(req, res) {
    res.render('users/signin', {
        title: 'Sign in',
        message: req.flash('error')
    });
};

/**
 * Show sign up form
 */
exports.signup = function(req, res) {
    res.render('users/signup', {
        title: 'Sign up',
        user: new User()
    });
};

/**
 * Logout
 */
exports.signout = function(req, res) {
    req.logout();
    res.redirect('/');
};

/**
 * Session
 */
exports.session = function(req, res) {
    res.redirect('/');
};

/**
 * Create user
 */
exports.create = function(req, res) {
    var user = new User(req.body);

    user.provider = 'local';
    user.save(function(err) {
        if (err) {
            console.log('the error');
            console.log(err);
            return res.render('users/signup', {
                errors: err.errors,
                user: user
            });
        }
        req.logIn(user, function(err) {
            if (err) return next(err);
            //I probably want this to redirect to the 'edit user' page rather than home
            // res.send({
            //     user:req.user
            // })
            return res.redirect('/');
        });
    });
};

/**
 *  Show profile
 */
exports.show = function(req, res) {
    var user = req.profile;

    res.send({
        user: req.user
    });
};

/**
 * Send User
 */
exports.me = function(req, res) {
    res.jsonp(req.user || null);
};
exports.upload = function(dir) {
    return function(req, res, next) {
        var img = req.files.file;
        var user = req.user;
        var old = img.originalFilename;
        var fileType = old.split('.');
        //(crypto.createHash('md5').update(old, 'utf8').digest("hex")).toString() 
        fileType = '.' + fileType[fileType.length - 1];
        var name = user._id + fileType;
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
exports.update = function(req, res) {

    var user = req.user;
    var img = req.body.user.avatar.replace("C:\\fakepath\\", "/img/uploads/");
    var fileType = img.split('.');
    fileType = '.' + fileType[fileType.length - 1];
    //this is all content from the page form
    user.name = req.body.user.name;
    user.aboutMe = req.body.user.aboutMe;
    user.location = req.body.user.location;
    //need to add new location types here
    user.username = req.body.user.username;
    user.avatar = '/img/uploads/' + user._id + fileType;

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
 * Find user by id
 */
exports.user = function(req, res, next, id) {
    User.findOne({
        _id: id
    })
        .exec(function(err, user) {
            if (err) return next(err);
            if (!user) return next(new Error('Failed to load User ' + id));
            req.profile = user;
            next();
        });
};