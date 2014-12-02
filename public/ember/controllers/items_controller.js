App.ItemsCreateController = Ember.Controller.extend({
    needs: ['items'],
    actions: {
        createItem: function() {
            var item = this.content,
                self = this;

            function transitionToItem(item) {
                self.transitionToRoute('items.item', item);
            }

            function failure(reason) {
                //errors
                alert(reason);
            }

            item.save().then(transitionToItem).
            catch (failure);
        },

        uploadPhoto: function() {

        }
    }
});

App.ItemsItemController = Ember.Controller.extend({
    needs: ['application', 'items'],
    isEditing: false,
    isOwner: true,
    init: function(){
        console.log(this.get('content.name'));
    },
    actions: {
        editItem: function() {
            this.set('isEditing', true);
        },
        saveEdit: function() {
            this.set('isEditing', false);

            var item = this.content;
            item.save();

            this.transitionToRoute('items.item', item);
        },
        removeItem: function() {
            this.set('isEditing', false);
            var item = this.content;
            item.deleteRecord();
            item.save();
            this.transitionToRoute('items.index');
        }
    }

});

App.ItemsController = Ember.Controller.extend({
    types: {
        'name': 'types',
        'question': 'Category',
        'choices': ['Tents', 'Bags', 'Torches', 'Kayaks', 'Other'],
        'answer': 'Tents'
    },
});