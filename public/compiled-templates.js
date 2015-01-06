Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "header", "header", options) : helperMissing.call(depth0, "render", "header", "header", options))));
  data.buffer.push("\n    <div id=\"main\">\n    	");
  stack1 = helpers._triageMustache.call(depth0, "x-woof", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n    \n");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "modal", options) : helperMissing.call(depth0, "outlet", "modal", options))));
  return buffer;
  
});

Ember.TEMPLATES["articles/article"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <form class=\"form-horizontal\">\n    <div class=\"control-group\">\n        <label class=\"control-label\" for=\"title\">Title</label>\n\n        <div class=\"controls\">\n            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("content.title"),
    'id': ("title"),
    'placeholder': ("Title")
  },hashTypes:{'type': "STRING",'value': "ID",'id': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n            Url Segment ");
  stack1 = helpers._triageMustache.call(depth0, "content.slug", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("                \n            </input>\n        </div>\n        \n        <div class=\"controls\">\n        <span class=\"question\">");
  stack1 = helpers._triageMustache.call(depth0, "types.question", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n        ");
  data.buffer.push(escapeExpression((helper = helpers['radio-group'] || (depth0 && depth0['radio-group']),options={hash:{
    'content': ("controllers.articles.types.choices"),
    'value': ("controllers.articles.answer"),
    'selection': ("content.type"),
    'name': ("controllers.articles.types.name")
  },hashTypes:{'content': "ID",'value': "ID",'selection': "ID",'name': "ID"},hashContexts:{'content': depth0,'value': depth0,'selection': depth0,'name': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "radio-group", options))));
  data.buffer.push("\n        </div>\n    </div>\n    <div class=\"control-group\">\n        <label class=\"control-label\" for=\"articleContent\">Article Content</label>\n        <div class=\"controls\">\n            ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'id': ("articleContent"),
    'value': ("content.articleContent"),
    'cols': ("30"),
    'rows': ("10"),
    'placeholder': ("Article Content")
  },hashTypes:{'id': "STRING",'value': "ID",'cols': "STRING",'rows': "STRING",'placeholder': "STRING"},hashContexts:{'id': depth0,'value': depth0,'cols': depth0,'rows': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n        </div>\n    </div>\n    <div class=\"control-group\">\n        <div class=\"controls\">\n            <button class=\"btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveEdit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Update</button>\n        </div>\n    </div>\n    </form>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <div class=\"article\">\n    <h2>");
  stack1 = helpers._triageMustache.call(depth0, "content.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n    <h4>url segment: ");
  stack1 = helpers._triageMustache.call(depth0, "content.urlSegment", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n    <h4>article type: ");
  stack1 = helpers._triageMustache.call(depth0, "content.type", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data},helper ? helper.call(depth0, "created", "short", options) : helperMissing.call(depth0, "formatDate", "created", "short", options))));
  data.buffer.push("\n    <div>\n        ");
  stack1 = helpers._triageMustache.call(depth0, "content.articleContent", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n    <button class=\"btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editArticle", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Edit</button>\n    </div>\n");
  return buffer;
  }

  data.buffer.push("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-8\">\n");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n</div>\n</div>\n</div>    ");
  return buffer;
  
});

Ember.TEMPLATES["articles/create"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-8\">\n            <h4>Create</h4>\n            <section>\n                <form class=\"form-horizontal\">\n                    <div class=\"control-group\">\n                        <div class=\"controls\">\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("content.title"),
    'id': ("title"),
    'placeholder': ("Title")
  },hashTypes:{'type': "STRING",'value': "ID",'id': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(" Url slug: ");
  stack1 = helpers._triageMustache.call(depth0, "content.slug", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </div>\n                        <div class=\"controls\">\n                            <span class=\"question\">");
  stack1 = helpers._triageMustache.call(depth0, "controllers.articles.question", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                            ");
  data.buffer.push(escapeExpression((helper = helpers['radio-group'] || (depth0 && depth0['radio-group']),options={hash:{
    'content': ("controllers.articles.types.choices"),
    'value': ("controllers.articles.answer"),
    'selection': ("content.type"),
    'name': ("controllers.articles.types.name")
  },hashTypes:{'content': "ID",'value': "ID",'selection': "ID",'name': "ID"},hashContexts:{'content': depth0,'value': depth0,'selection': depth0,'name': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "radio-group", options))));
  data.buffer.push("\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        ");
  data.buffer.push(escapeExpression((helper = helpers['file-upload'] || (depth0 && depth0['file-upload']),options={hash:{
    'url': ("content.image")
  },hashTypes:{'url': "ID"},hashContexts:{'url': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "file-upload", options))));
  data.buffer.push("\n                    </div>\n                    <div class=\"control-group\">\n                        <div class=\"controls\">\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'id': ("articleContent"),
    'value': ("content.articleContent"),
    'cols': ("60"),
    'rows': ("20"),
    'placeholder': ("Article Content")
  },hashTypes:{'id': "STRING",'value': "ID",'cols': "STRING",'rows': "STRING",'placeholder': "STRING"},hashContexts:{'id': depth0,'value': depth0,'cols': depth0,'rows': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n                        </div>\n                    </div>\n                    <div class=\"control-group\">\n                        <div class=\"controls\">\n                            <button class=\"btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createArticle", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Create article</button>\n                        </div>\n                    </div>\n                </form>\n            </section>\n        </div>\n    </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["articles/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                        <li>\n                            <span class=\"title\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "articles.article", "id", options) : helperMissing.call(depth0, "link-to", "articles.article", "id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                            <span>by ");
  stack1 = helpers._triageMustache.call(depth0, "user.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                            <span>on ");
  data.buffer.push(escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data},helper ? helper.call(depth0, "created", "short", options) : helperMissing.call(depth0, "formatDate", "created", "short", options))));
  data.buffer.push("</span>\n                            <span>");
  stack1 = helpers._triageMustache.call(depth0, "content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                            <span>");
  stack1 = helpers._triageMustache.call(depth0, "articleContent", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                        </li>\n                        ");
  return buffer;
  }
function program2(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

  data.buffer.push("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-8\">\n                <h2>Index of articles:</h2>\n                <div class=\"article-list\">\n                    <ul>\n                        ");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </ul>\n                </div>\n        </div>\n    </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["catchall"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n					<h1>");
  stack1 = helpers._triageMustache.call(depth0, "model.firstObject.userid.username", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("'s Gear</h1>\n					");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n");
  stack1 = helpers.each.call(depth0, "model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n					");
  stack1 = helpers['if'].call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n					<div class='per-item' >\n						");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "items.item", "id", options) : helperMissing.call(depth0, "link-to", "items.item", "id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						<div>Added on ");
  data.buffer.push(escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data},helper ? helper.call(depth0, "created", "short", options) : helperMissing.call(depth0, "formatDate", "created", "short", options))));
  stack1 = helpers['if'].call(depth0, "userid.username", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n						\n						</div>\n						");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n						<div class='title'><h3 ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("type")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</h3></div>\n						<div class='type'>");
  stack1 = helpers._triageMustache.call(depth0, "type", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n						\n						<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("photo")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n						<div class='itemDesc'>");
  stack1 = helpers._triageMustache.call(depth0, "itemDesc", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push(" <div class='username'>by ");
  stack1 = helpers._triageMustache.call(depth0, "userid.username", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>");
  return buffer;
  }

function program10(depth0,data) {
  
  
  data.buffer.push("\n					<h2 style='color:white;'>No Gear in this Shed Yet! <a href=\"/items/create\">Add Some of Your Stuff.</a></h2>\n					");
  }

  data.buffer.push("<div id='outer'><div class='conta'>\n	");
  stack1 = helpers['if'].call(depth0, "model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			<div class='item-list'>\n				");
  stack1 = helpers['if'].call(depth0, "model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(10, program10, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n			</div>\n</div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["components/modal-dialog"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<div id=\"modalDialog\" class=\"modal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n           ");
  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n	</div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["components/radio-group"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n	<span class=\"answer\">\n	    <label>\n	        ");
  data.buffer.push(escapeExpression((helper = helpers['radio-button'] || (depth0 && depth0['radio-button']),options={hash:{
    'value': (""),
    'name': ("view.name"),
    'selection': ("view.selection")
  },hashTypes:{'value': "ID",'name': "ID",'selection': "ID"},hashContexts:{'value': depth0,'name': depth0,'selection': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "radio-button", options))));
  data.buffer.push("\n	        ");
  stack1 = helpers._triageMustache.call(depth0, "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	    </label>\n	</span>\n");
  return buffer;
  }

  stack1 = helpers.each.call(depth0, "content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  return buffer;
  
});

Ember.TEMPLATES["components/x-woof-message"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":woof-message :alert :alert-dismissable message.typeClass")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n  <strong>");
  data.buffer.push(escapeExpression((helper = helpers.capitalize || (depth0 && depth0.capitalize),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "message.type", options) : helperMissing.call(depth0, "capitalize", "message.type", options))));
  data.buffer.push("</strong> ");
  stack1 = helpers._triageMustache.call(depth0, "message.message", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["components/x-woof"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n      ");
  data.buffer.push(escapeExpression((helper = helpers['x-woof-message'] || (depth0 && depth0['x-woof-message']),options={hash:{
    'message': ("")
  },hashTypes:{'message': "ID"},hashContexts:{'message': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "x-woof-message", options))));
  data.buffer.push("\n   ");
  return buffer;
  }

  data.buffer.push("<div class=\"bottom-right\">\n   ");
  stack1 = helpers.each.call(depth0, "messages", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("	\n</div>\n   ");
  return buffer;
  
});

Ember.TEMPLATES["header"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n      \n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                ");
  stack1 = helpers._triageMustache.call(depth0, "view.user.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <b class=\"caret\"></b>\n            </a>\n            <ul class=\"dropdown-menu\">\n                <li><a href=\"#/users/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "view.user._id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">Profile</a></li>\n                <li><a href=\"#/items/user/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "view.user._id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">My Gear</a></li>\n                <li><a href=\"/signout\">Signout</a>\n                </li>\n            </ul>\n        </li>\n      </ul>\n\n           <ul class=\"nav navbar-nav navbar-right\">        \n      ");
  stack1 = helpers.each.call(depth0, "link", "in", "view.menu", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </ul> \n      ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <li class=\"dropdown\"> \n        ");
  stack1 = helpers['if'].call(depth0, "link.submenu", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("            \n          </li>\n        ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">                 \n        ");
  stack1 = helpers._triageMustache.call(depth0, "link.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<b class=\"caret\"></b></a>\n        \n          <ul class=\"dropdown-menu\">\n          ");
  stack1 = helpers.each.call(depth0, "subLink", "in", "link.submenu", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </ul>\n          ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n              <li>\n              ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "subLink.link", options) : helperMissing.call(depth0, "link-to", "subLink.link", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("           \n              </li>\n          ");
  return buffer;
  }
function program5(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "subLink.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "link.link", options) : helperMissing.call(depth0, "link-to", "link.link", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  return buffer;
  }
function program8(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "link.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

function program10(depth0,data) {
  
  
  data.buffer.push("\n       <ul class=\"nav navbar-nav navbar-right\" data-ng-hide=\"global.authenticated\">\n        <li><a href=\"signup\">Signup</a>\n        </li>\n        <li class=\"divider-vertical\"></li>\n        <li><a href=\"signin\">Signin</a>\n        </li>\n      </ul>\n      ");
  }

  data.buffer.push("<header class=\"navbar navbar-default navbar-fixed-top bs-docs-nav\" role=\"banner\" data-ng-controller=\"HeaderController\">\n  <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("isMobile:mobile:desktop")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("  class=\"container\">\n    <div class=\"navbar-header\">\n      <button class=\"navbar-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\".bs-navbar-collapse\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\" style=\"color: black;\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a href=\"../\" class=\"navbar-brand\"><img id='logo' src='/img/icons/Gearshed_Small.png'></a>\n    </div>\n    <nav class=\"collapse navbar-collapse bs-navbar-collapse\" role=\"navigation\">\n	  \n      ");
  stack1 = helpers['if'].call(depth0, "view.authenticated", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n      ");
  stack1 = helpers.unless.call(depth0, "view.authenticated", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    </nav>\n  </div>\n</header>\n");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("\n<div class='topper'><h1>Share the Outdoors</h1>\n<input placeholder='Tents, Bags...'> ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.AutoCompleteIndexView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("<button class='btn'>Onward!</button></div>\n<!-- This will need to be a 'Get' request -->\n<div class='mainPage'> <h2 class='glyphicon glyphicon-chevron-down' id='scrollGuide'></h2><h4> <img style='float:left; margin:5px 10px;' src='img/uploads/10.-pangea_politik.jpg'> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\ntempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\nquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\nconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse \ncillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\nproident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>\n<h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</h3>\n\n<h4>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\nquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo \nconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\ncillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\nproident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4></div>");
  return buffer;
  
});

Ember.TEMPLATES["items/create"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class='container'>\n	<div class='row'>\n		<div class='eachItem'>\n			<h4>Add your Gear!</h4>\n			<section>\n				<form class='form-horizontal'>\n					<div class='control-group'>\n						<div class='controls'>\n							");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("content.name"),
    'id': ("name"),
    'placeholder': ("Item Name")
  },hashTypes:{'type': "STRING",'value': "ID",'id': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n						</div>\n						<div class='controls'>\n							");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("content.brand"),
    'id': ("brand"),
    'placeholder': ("Brand")
  },hashTypes:{'type': "STRING",'value': "ID",'id': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n						</div>\n						<div class='controls'>\n							<span class='question'>");
  stack1 = helpers._triageMustache.call(depth0, "controllers.items.question", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n							");
  data.buffer.push(escapeExpression((helper = helpers['radio-group'] || (depth0 && depth0['radio-group']),options={hash:{
    'content': ("controllers.items.types.choices"),
    'selection': ("content.type"),
    'value': ("controllers.items.types.answer"),
    'name': ("controllers.items.types.name")
  },hashTypes:{'content': "ID",'selection': "ID",'value': "ID",'name': "ID"},hashContexts:{'content': depth0,'selection': depth0,'value': depth0,'name': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "radio-group", options))));
  data.buffer.push("\n						</div>\n					</div>\n					<div class=\"control-group\">\n						<!-- I still have no idea how this works -->\n                    		");
  data.buffer.push(escapeExpression((helper = helpers['file-upload'] || (depth0 && depth0['file-upload']),options={hash:{
    'url': ("/items/upload"),
    'value': ("content.photo")
  },hashTypes:{'url': "STRING",'value': "ID"},hashContexts:{'url': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "file-upload", options))));
  data.buffer.push("\n                    </div>\n                    <div class='control-group'>\n                    	<div class='controls'>\n                    		");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'id': ("itemDesc"),
    'value': ("content.itemDesc"),
    'cols': ("60"),
    'rows': ("4"),
    'placeholder': ("Tell everyone how awesome your gear is")
  },hashTypes:{'id': "STRING",'value': "ID",'cols': "STRING",'rows': "STRING",'placeholder': "STRING"},hashContexts:{'id': depth0,'value': depth0,'cols': depth0,'rows': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n                    	</div>\n                    </div>\n                    <div class='control-group'>\n                    	<div class='controls'>\n							");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("content.value"),
    'id': ("value"),
    'placeholder': ("Item Value")
  },hashTypes:{'type': "STRING",'value': "ID",'id': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n						</div>\n						<div class='controls'>\n							");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("content.rate"),
    'id': ("rate"),
    'placeholder': ("Rate")
  },hashTypes:{'type': "STRING",'value': "ID",'id': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n						</div>\n                    </div>\n                    <!-- I will also need to add\n                    The ability to have black out dates at this point on the page -->\n                    <div class='control-group'>\n                    	<div class='controls'>\n                    		<button class=\"btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createItem", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Add to the Shed!</button>\n                    	</div>\n                    </div>\n				</form>\n			</section>\n        </div>\n    </div>\n</div>\n			");
  return buffer;
  
});

Ember.TEMPLATES["items/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n					\n\n					");
  stack1 = helpers['if'].call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					\n					\n					");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n					<div class='per-item' >\n						");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "items.item", "id", options) : helperMissing.call(depth0, "link-to", "items.item", "id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						<div>Added on ");
  data.buffer.push(escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data},helper ? helper.call(depth0, "created", "short", options) : helperMissing.call(depth0, "formatDate", "created", "short", options))));
  stack1 = helpers['if'].call(depth0, "userid.username", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n						\n						</div>\n						");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n						<div class='title'><h3 ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("type")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</h3></div>\n						<div class='type'>");
  stack1 = helpers._triageMustache.call(depth0, "type", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n						\n						<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("photo")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n						<div class='itemDesc'>");
  stack1 = helpers._triageMustache.call(depth0, "itemDesc", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push(" <div class='username'>by ");
  stack1 = helpers._triageMustache.call(depth0, "userid.username", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>");
  return buffer;
  }

  data.buffer.push("<div id='outer'><div class='conta'>\n			<h1>All Gear</h1>\n			<div class='item-list'>\n\n					");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n			</div>\n</div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["items/item"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n	<form class=\"form-horizontal\">\n    <div class=\"control-group\">\n    	<label class='control-label' for='name'>Name</label>\n\n    	<div class='controls'>\n    		");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("content.name"),
    'id': ("name"),
    'placeholder': ("Item Name")
  },hashTypes:{'type': "STRING",'value': "ID",'id': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n	    	</input>\n	    </div>\n\n	    <div class='controls'>\n	    	<span class='question'>");
  stack1 = helpers._triageMustache.call(depth0, "types.question", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n	    	");
  data.buffer.push(escapeExpression((helper = helpers['radio-group'] || (depth0 && depth0['radio-group']),options={hash:{
    'content': ("controllers.items.types.choices"),
    'selection': ("content.type"),
    'value': ("controllers.items.types.answer"),
    'name': ("controllers.items.types.name")
  },hashTypes:{'content': "ID",'selection': "ID",'value': "ID",'name': "ID"},hashContexts:{'content': depth0,'selection': depth0,'value': depth0,'name': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "radio-group", options))));
  data.buffer.push("\n		</div>\n	</div>\n	<div class=\"control-group\">\n		<!-- I still have no idea how this works -->\n		");
  data.buffer.push(escapeExpression((helper = helpers['file-upload'] || (depth0 && depth0['file-upload']),options={hash:{
    'url': ("/items/upload"),
    'value': ("content.photo")
  },hashTypes:{'url': "STRING",'value': "ID"},hashContexts:{'url': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "file-upload", options))));
  data.buffer.push("\n	</div>\n    <div class='control-group'>\n		<div class='controls'>\n			<label class=\"control-label\" for=\"itemDesc\">Item Description</label>\n    		");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'id': ("itemDesc"),
    'value': ("content.itemDesc"),
    'cols': ("60"),
    'rows': ("6"),
    'placeholder': ("Tell everyone how awesome your gear is")
  },hashTypes:{'id': "STRING",'value': "ID",'cols': "STRING",'rows': "STRING",'placeholder': "STRING"},hashContexts:{'id': depth0,'value': depth0,'cols': depth0,'rows': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n    	</div>\n    </div>\n    <div class='control-group'>\n    	<div class='controls'>\n			<label class=\"control-label\" for=\"value\">Value</label>\n			");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("content.value"),
    'id': ("value"),
    'placeholder': ("Item Value")
  },hashTypes:{'type': "STRING",'value': "ID",'id': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		</div>\n		<div class='controls'>\n			<label class=\"control-label\" for=\"rate\">Rental Rate</label>\n			");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("content.rate"),
    'id': ("rate"),
    'placeholder': ("Rate")
  },hashTypes:{'type': "STRING",'value': "ID",'id': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		</div>\n    </div>\n    <!-- I will also need to add\n    The ability to have black out dates at this point on the page -->\n    <div class='control-group'>\n    	<div class='controls'>\n    		<button class=\"btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveEdit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Update</button><button class='btn btn-error' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeItem", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Delete Item</button>\n    	</div>\n    </div>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n	<div class='item'>\n		<h1>");
  stack1 = helpers._triageMustache.call(depth0, "content.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n	<h5> <a href='#/users/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "content.userid.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("'>");
  stack1 = helpers._triageMustache.call(depth0, "content.userid.username", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("	<img style='height:20px;'");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("content.userid.showAvatar")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></a></h5>\n	<h5>Location: ");
  stack1 = helpers._triageMustache.call(depth0, "content.userid.location", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h5>\n\n		<a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("content.photo")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("><img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("content.photo")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></a>\n		<h4>Gear Category: ");
  stack1 = helpers._triageMustache.call(depth0, "content.type", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n		<h4>Added on ");
  data.buffer.push(escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data},helper ? helper.call(depth0, "created", "short", options) : helperMissing.call(depth0, "formatDate", "created", "short", options))));
  data.buffer.push("</h4>\n		\n		<div class='itemDesc'>\n			");
  stack1 = helpers._triageMustache.call(depth0, "content.itemDesc", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		</div>\n		<div>\n			<div><strong>Rate: </strong>$");
  stack1 = helpers._triageMustache.call(depth0, "content.rate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div><div><strong> Value: </strong>$");
  stack1 = helpers._triageMustache.call(depth0, "content.value", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n			<div style='float:right; margin-top:-35em;'>\n			<div id='leftInline' style='display:inline-block'></div>\n			<div id='rightInline' style='display:inline-block'></div>\n		</div>\n\n		</div>\n\n");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        <button class='btn' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editItem", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Edit</button>\n    </div>\n    ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    	");
  stack1 = helpers._triageMustache.call(depth0, "content.userAuth", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            <button class='btn' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "buyItem", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Buy</button>\n    </div>\n    ");
  return buffer;
  }

  data.buffer.push("    <script type=\"text/javascript\">\n    rome(leftInline, {\n      time: false,\n      dateValidator: rome.val.beforeEq(rightInline)\n    });\n\n    rome(rightInline, {\n      time: false,\n      dateValidator: rome.val.afterEq(leftInline)\n    });\n    </script>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"eachItem\">\n");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	");
  stack1 = helpers['if'].call(depth0, "content.userAuth", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n</div>\n</div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["modal"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n<div class=\"modal-header centerAlign\">\n	<h4 class=\"centerAlign\">Change name</h4>\n</div>\n<div class=\"modal-body\">\n	<p>Enter a new name:</p>\n	<p>");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("name")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("</p>\n</div>\n<div class=\"modal-footer\">\n    <button class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Close</button>                    \n</div>\n");
  return buffer;
  }

  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data}
  if (helper = helpers['modal-dialog']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['modal-dialog']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['modal-dialog']) { stack1 = blockHelperMissing.call(depth0, 'modal-dialog', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["photoViewer"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, helper, options, escapeExpression=this.escapeExpression, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n<div class=\"full-size-photo-viewer\">\n	<div class=\"modal-body\">\n		<div class=\"photo\">\n			<img class=\"img-responsive center\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("this.content.content.src")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n		</div>\n		<div  class=\"side-panel\">\n			<div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "forward", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">NEXT</div>\n			<div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "backwards", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">PREV</div>\n			<div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">CLOSE</div>\n		</div>\n	</div>\n</div>\n");
  return buffer;
  }

  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data}
  if (helper = helpers['modal-dialog']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['modal-dialog']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['modal-dialog']) { stack1 = blockHelperMissing.call(depth0, 'modal-dialog', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["photos/create"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-4 col-md-offset-4\">\n            <div class=\" panel panel-default\">\n                <div class=\"panel-heading\">\n                    Upload photo\n                </div>\n                <div class=\"panel-body\">\n                    <fieldset>\n                        <form>\n                            <div class=\"form-group\">\n                                ");
  data.buffer.push(escapeExpression((helper = helpers['file-upload'] || (depth0 && depth0['file-upload']),options={hash:{
    'url': ("/photos/upload")
  },hashTypes:{'url': "STRING"},hashContexts:{'url': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "file-upload", options))));
  data.buffer.push("\n                            </div>\n                        </form>\n                    </fieldset>\n                </div>\n            </div>\n            <div class=\" panel panel-default\">\n                <div class=\"panel-heading\">\n                    Drag and Drop\n                </div>\n                <div class=\"dropzone\">\n                    <div class=\"panel-body\">\n                      ");
  data.buffer.push(escapeExpression((helper = helpers['file-upload-draggable'] || (depth0 && depth0['file-upload-draggable']),options={hash:{
    'url': ("/photos/upload")
  },hashTypes:{'url': "STRING"},hashContexts:{'url': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "file-upload-draggable", options))));
  data.buffer.push("\n                    </div>    \n                </div>                \n            </div>\n        </div>\n    </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["photos/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n	        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "photos.photo", "", options) : helperMissing.call(depth0, "link-to", "photos.photo", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n		        <li>		  \n		            <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("src")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'alt': ("name")
  },hashTypes:{'alt': "STRING"},hashContexts:{'alt': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n		            <p>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>        \n		        </li>\n	        ");
  return buffer;
  }

  data.buffer.push("<div class=\"loader \"></div>\n\n<div class=\"photo-list\">\n    <ul id=\"tiles\">\n        ");
  stack1 = helpers.each.call(depth0, "content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n    </ul>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["photos/photo"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                        <form class=\"form-horizontal\">\n                        <div class=\"control-group\">\n                            <label class=\"control-label\" for=\"name\">Title</label>\n\n                            <div class=\"controls\">\n                                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("content.name"),
    'id': ("name"),
    'placeholder': ("name")
  },hashTypes:{'type': "STRING",'value': "ID",'id': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("                      \n                                </input>\n                            </div>\n                            \n                            <div class=\"controls\">\n                            ");
  data.buffer.push(escapeExpression((helper = helpers['file-upload'] || (depth0 && depth0['file-upload']),options={hash:{
    'url': ("/photos/upload")
  },hashTypes:{'url': "STRING"},hashContexts:{'url': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "file-upload", options))));
  data.buffer.push("\n                            </div>\n                        \n                        <div class=\"control-group\">\n                            <div class=\"controls\">\n                                <button class=\"btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveEdit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Save</button>\n                            </div>\n                        </div>\n                        </form>\n                    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                        <div>\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "photoViewer", "", options) : helperMissing.call(depth0, "render", "photoViewer", "", options))));
  data.buffer.push("\n                            <h2>");
  stack1 = helpers._triageMustache.call(depth0, "content.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n                            \n                            <button class=\"btn btn-success\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "downloadPhoto", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Download</button>\n                            <button class=\"btn btn-warning\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editPhoto", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Edit</button>\n                            <button class=\"btn btn-danger\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deletePhoto", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Delete</button>\n                        </div>\n                    ");
  return buffer;
  }

  data.buffer.push("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-4 col-md-offset-4\">\n            <div class=\" panel panel-default\">\n                <div class=\"panel-body\">\n                    ");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("                    \n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n    ");
  return buffer;
  
});

Ember.TEMPLATES["search/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<div id='outer'><div class='conta'>\n			<h1>Search</h1>\n			<div class='topper'>\n				<input placeholder='Tents, Bags...'> ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.AutoCompleteIndexView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("<button class='btn'>Onward!</button></div>\n			</div>\n</div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["search/results"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n						");
  stack1 = helpers.each.call(depth0, "model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n						\n\n							");
  stack1 = helpers['if'].call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n						\n						\n						");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n							<div class='per-item' >\n								");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "items.item", "id", options) : helperMissing.call(depth0, "link-to", "items.item", "id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n								<div>Added on ");
  data.buffer.push(escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data},helper ? helper.call(depth0, "created", "short", options) : helperMissing.call(depth0, "formatDate", "created", "short", options))));
  stack1 = helpers['if'].call(depth0, "userid.username", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n								\n								</div>\n							");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n								<div class='title'><h3 ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("type")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</h3></div>\n								<div class='type'>");
  stack1 = helpers._triageMustache.call(depth0, "type", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n								\n								<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("photo")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n								<div class='itemDesc'>");
  stack1 = helpers._triageMustache.call(depth0, "itemDesc", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push(" <div class='username'>by ");
  stack1 = helpers._triageMustache.call(depth0, "userid.username", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>");
  return buffer;
  }

function program8(depth0,data) {
  
  
  data.buffer.push("\n					<h2 style='color:white;'>No Results to Display</h2>\n					");
  }

  data.buffer.push("<div id='outer'><div class='conta'>\n			<h1>Results</h1>\n			<div class='item-list'>\n					");
  stack1 = helpers['if'].call(depth0, "model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n			</div>\n</div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["users/user"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n	<form class=\"form-horizontal\">\n    <div class='control-group'>\n                <label class='control-label' for='name'>Name</label>\n\n        <div class='controls'>\n            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("content.name"),
    'id': ("name"),
    'placeholder': ("Item Name")
  },hashTypes:{'type': "STRING",'value': "ID",'id': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n            </input>\n        </div>\n\n    <div class=\"control-group\">\n        ");
  data.buffer.push(escapeExpression((helper = helpers['file-upload'] || (depth0 && depth0['file-upload']),options={hash:{
    'url': ("/users/upload"),
    'value': ("content.avatar")
  },hashTypes:{'url': "STRING",'value': "ID"},hashContexts:{'url': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "file-upload", options))));
  data.buffer.push("\n    </div>\n\n                <label class='control-label' for='location'>Location</label>\n\n        <div class='controls'>\n            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.AutoCompleAddressView", {hash:{
    'id': ("location"),
    'value': ("content.location")
  },hashTypes:{'id': "STRING",'value': "ID"},hashContexts:{'id': depth0,'value': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n        </div>\n        <div class='controls'>\n            <label class=\"control-label\" for=\"itemDesc\">About Me: </label>\n            ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'id': ("itemDesc"),
    'value': ("content.aboutMe"),
    'cols': ("60"),
    'rows': ("4"),
    'placeholder': ("How do you spend your time outdoors?")
  },hashTypes:{'id': "STRING",'value': "ID",'cols': "STRING",'rows': "STRING",'placeholder': "STRING"},hashContexts:{'id': depth0,'value': depth0,'cols': depth0,'rows': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n        </div>\n    	<div class='controls'>\n    		<button class=\"btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveEdit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Update</button>\n    	</div>\n    </div>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <div class='item'>\n        <a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("content.avatar")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("><img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("content.showAvatar")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ></a>\n        <h2>");
  stack1 = helpers._triageMustache.call(depth0, "content.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n        <h3>");
  stack1 = helpers._triageMustache.call(depth0, "content.username", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h3>\n        <h4>Joined ");
  data.buffer.push(escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data},helper ? helper.call(depth0, "created", "short", options) : helperMissing.call(depth0, "formatDate", "created", "short", options))));
  data.buffer.push("</h4>\n        <h4><a href='/#/items/user/");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "content.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("'> ");
  stack1 = helpers['if'].call(depth0, "isOwner", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" Gear</a></h4>\n        <div class='aboutMe'>\n            ");
  stack1 = helpers._triageMustache.call(depth0, "content.aboutMe", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n        <h3>Location: ");
  stack1 = helpers._triageMustache.call(depth0, "content.location", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h3>\n        ");
  stack1 = helpers['if'].call(depth0, "isOwner", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n       \n    </div>\n");
  return buffer;
  }
function program4(depth0,data) {
  
  
  data.buffer.push("My");
  }

function program6(depth0,data) {
  
  var buffer = '', stack1;
  stack1 = helpers._triageMustache.call(depth0, "content.username", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("'s");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        <button class='btn' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editItem", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Edit</button>\n        ");
  return buffer;
  }

  data.buffer.push("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"eachItem\">\n");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n</div>\n</div>");
  return buffer;
  
});