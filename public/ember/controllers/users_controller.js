App.UsersUserController = Ember.Controller.extend({
    needs: ['application','users'],
    init: function() {
        //this needs to be tested - it is probably not working
        if(global.user.username === user.username){
            this.set('isOwner', true);
        }   
    },
    actions: {
        editItem: function() {
            this.set('isEditing', true);
        },
        saveEdit: function() {
            document.getElementById('location').focus();

            this.set('content.location', document.getElementById('location').value);
            this.set('isEditing', false);
            var user = this.content;
            user.save();

            this.transitionToRoute('users.user', user);
            location.reload(true);

        }
    },
    isEditing: false

});