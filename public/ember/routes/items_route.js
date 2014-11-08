App.ItemsIndexRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('item');
    }
});

App.ItemsItemRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('item', params.item_id);
    }
});

App.ItemsCreateRoute = Ember.Route.extend({
    model: function() {
        return this.store.createRecord('item', {
            name: '',
            pageContent: '',
            urlSegment: ''
        });
    }
});