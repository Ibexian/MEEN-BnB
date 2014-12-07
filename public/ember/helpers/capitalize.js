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

Handlebars.registerHelper('ifCond', function(v1, v2, options) {
  if(v1 == v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});