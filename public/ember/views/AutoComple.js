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