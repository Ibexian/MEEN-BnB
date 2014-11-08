//User
App.User = DS.Model.extend({
    name: DS.attr('string'),
    username: DS.attr('string'),
    aboutMe: DS.attr('string'),
    avatar: DS.attr('string'),
    time: new Date().getTime(),
    item: DS.hasMany('item', {
        async: true
    }),
    location: DS.attr('string'),
    showAvatar: function() {
        return this.get('avatar') + '?' + this.get('time');
    }.property('avatar', 'time')
})