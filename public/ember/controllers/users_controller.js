App.UsersUserController = Ember.Controller.extend({
    needs: ['users'],
    actions: {
        editItem: function() {
            this.set('isEditing', true);
        },
        saveEdit: function() {
            document.getElementById('location').focus();
            this.set('isEditing', false);
            var user = this.content;
            user.save();

            this.transitionToRoute('users.user', user);
            location.reload(true);
        }
    },
    isEditing: false

});