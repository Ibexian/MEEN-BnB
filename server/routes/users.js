module.exports = function(app, passport, auth) {
    //User Routes 
    var users = require('../controllers/users');
    app.get('/users/:userId', users.show);
    app.put('/users/:userId', auth.requiresLogin, auth.user.hasAuthorization, users.update);
    //app.put('/users/:userId', users.update);
    app.post('/users/upload', users.upload());
    app.param('userId', users.user);
}