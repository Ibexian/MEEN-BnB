//Item
App.Item = DS.Model.extend({
    name: DS.attr('string'),
    itemDesc: DS.attr('string'),
    type: DS.attr('string'),
    photo: DS.attr('string'),
    value: DS.attr('string'),
    rate: DS.attr('string'),
    username: DS.attr('string'),
    userid: DS.belongsTo('user')
});