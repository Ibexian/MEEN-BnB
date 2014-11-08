module.exports = function(app, passport, auth) {
    //Item Routes

    var users = require('../controllers/users');
    var items = require('../controllers/items');

    app.get('/items', items.index);

    app.post('/items', auth.requiresLogin, items.create);
    //app.post('/items', items.create);
    app.get('/items/:itemId', items.show);
    app.put('/items/:itemId', auth.requiresLogin, auth.item.hasAuthorization, items.update);
    //app.del('/items/:itemId', auth.requiresLogin, auth.item.hasAuthorization, item.destroy);

    app.get('/items/user/:userid', items.index);
    //app.put('/items/:itemId', items.update);
    app.post('/items/upload', items.upload());
    app.del('/items/:itemId', auth.requiresLogin, auth.item.hasAuthorization, items.destroy);

    //finish with setting up the itemId param
    app.param('itemId', items.item);

};