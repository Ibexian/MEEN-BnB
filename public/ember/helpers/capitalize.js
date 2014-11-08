Ember.Handlebars.helper('capitalize', function(value) {
    return value.capitalize();
});

Handlebars.registerHelper('each-reverse', function(context, options) {
    var ret = "";
    console.log(context);
    for (var i = 0, j = context.length; i < j; i++) {
        ret = ret + options.fn(context[i]);
    }

    return ret;
});