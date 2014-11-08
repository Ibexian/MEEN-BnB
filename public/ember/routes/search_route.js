App.SearchResultsRoute = Ember.Route.extend({
    model: function(params) {
        console.log(params);
        return this.store.find('item', params);
    }
});