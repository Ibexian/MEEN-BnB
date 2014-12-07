App.HeaderView = Ember.View.extend({
    templateName: 'header',
    user: global.user,
    authenticated: global.authenticated,
    menu: [{
        'title': 'Gear',
        'link': 'items',
        'submenu': [{
            'title': 'All Gear',
            'link': 'items'
        }, {
            'title': 'Add a Some Gear',
            'link': 'items.create'
        }]
    }]
});

App.AutoCompleteIndexView = Ember.TextField.extend({
    type: 'text',
    attributeBindings: ['placeholder', 'style'],
    placeholder: 'Where to?',
    style: 'width:25em',
    didInsertElement: function() {
        var options = {
            componentRestrictions: {
                country: 'gb'
            }
        };
        //this.$() return the element as an array form, but google autocomplete seems to not accept this. So take the first one.
        new google.maps.places.Autocomplete(this.$()[0], options);
    }
});

App.ItemsItemView = Ember.View.extend({
    user: global.user
});