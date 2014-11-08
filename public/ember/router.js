App.Router.map(function() {
    this.route('catchall', {
        path: '/*url'
    }); // catch-all routes

    this.resource('articles', function() {
        this.route('create', {
            path: '/create'
        });
        this.route('article', {
            path: ':article_id'
        });
    });
    this.resource('photos', function() {
        this.route('create', {
            path: '/create'
        });
        this.route('photo', {
            path: ':photo_id'
        });
    });

    this.resource('users', function() {
        this.route('user', {
            path: ':user_id'
        });
    });
    this.resource('items', function() {
        this.route('create', {
            path: '/create'
        });
        this.route('item', {
            path: ':item_id'
        });
    });
    this.resource('search', {
        path: '/search'
    }, function() {
        this.route('results', {
            path: ':keyword'
        });
    });

});