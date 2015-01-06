(function() {

var App = window.App = Ember.Application.create();

/* Order and include as you please. */


})();

(function() {

App.DraggableMixin = Ember.Mixin.create({
  attributeBindings: ['draggable'],
  draggable: "true",
  dragStart: function(ev) {
    ev.dataTransfer.setData('text/data', this.get('content.id'));
    return $('.basket').addClass('dragging');
  },
  dragEnd: function() {
    return $('.basket').removeClass('dragging');
  }
});

})();

(function() {

App.DroppableMixin = Ember.Mixin.create({
  dragOver: function(ev) {
    this.$().addClass('drag-enter');
    return ev.preventDefault();
  },
  dragLeave: function() {
    return this.$().removeClass('drag-enter');
  }
});

})();

(function() {

App.InfiniteScrollControllerMixin = Ember.Mixin.create({
    loadingMore: false,
    page: 1,
    perPage: 25,

    actions: {
      getMore: function(){
        if (this.get('loadingMore')) return;

        this.set('loadingMore', true);
        this.get('target').send('getMore');
      },

      gotMore: function(items, nextPage){
        this.set('loadingMore', false);
        this.pushObjects(items);
        this.set('page', nextPage);
      }
    }
  });
  
  App.InfiniteScrollRouteMixin = Ember.Mixin.create({
    actions: {
      getMore: function() {
        throw new Error("Must override Route action `getMore`.");
      },
      fetchPage: function() {
        throw new Error("Must override Route action `getMore`.");
      }
    }
  });

  App.InfiniteScrollViewMixin = Ember.Mixin.create({
    setupInfiniteScrollListener: function(){
      $('.inf-scroll-outer-container').on('scroll', $.proxy(this.didScroll, this));
    },
    teardownInfiniteScrollListener: function(){
      $('.inf-scroll-outer-container').off('scroll', $.proxy(this.didScroll, this));
    },
    didScroll: function(){
      if (this.isScrolledToRight() || this.isScrolledToBottom()) {
        this.get('controller').send('getMore');
      }
    },
    isScrolledToRight: function(){
      var distanceToViewportLeft = (
        $('.inf-scroll-inner-container').width() - $('.inf-scroll-outer-container').width());
      var viewPortLeft = $('.inf-scroll-outer-container').scrollLeft();

      if (viewPortLeft === 0) {
        // if we are at the left of the page, don't do
        // the infinite scroll thing
        return false;
      }

      return (viewPortLeft - distanceToViewportLeft);
    },
    isScrolledToBottom: function(){
      var distanceToViewportTop = (
        $('.inf-scroll-inner-container').height() - $('.inf-scroll-outer-container').height());
      var viewPortTop = $('.inf-scroll-outer-container').scrollTop();

      if (viewPortTop === 0) {
        // if we are at the top of the page, don't do
        // the infinite scroll thing
        return false;
      }

      return (viewPortTop >= distanceToViewportTop);
    }
  });

})();

(function() {

App.ApplicationController = Ember.ObjectController.extend({
    init: function() {
        var isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
        this.set('isMobile', isMobile);
    }
});

})();

(function() {

App.ArticlesCreateController = Ember.Controller.extend({
    needs: ['articles'],
    actions: {
        createArticle: function() {
            var article = this.content,
                self = this;

            function transitionToArticle(article) {
                self.transitionToRoute('articles.article', article);
            }

            function failure(reason) {
                // handle the error
                alert(reason);
            }

            article.save().then(transitionToArticle).
            catch (failure);
        }
    }
});


App.ArticlesArticleController = Ember.Controller.extend({
    needs: ['articles'],
    actions: {
        editArticle: function() {
            this.set('isEditing', true);
        },
        saveEdit: function() {
            this.set('isEditing', false);

            var article = this.content;
            article.save();

            this.transitionToRoute('articles.article', article);
        }
    },
    isEditing: false
});

App.ArticlesController = Ember.Controller.extend({
    types: {
        'name': 'types',
        'question': 'Type',
        'choices': ['Blog', 'Article', 'Newsflash'],
        'answer': 'Blog'
    },
});


})();

(function() {

App.HeaderController = Ember.ObjectController.extend({
	needs: ['application'],
	init: function () {
		var isMobile = this.get('controllers.application.isMobile');
		this.set('isMobile', isMobile);
	}
});

})();

(function() {

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
    isOwner: false,
    actions: {
        editItem: function() {
            this.set('isEditing', true);
        },
        buyItem: function(){
            console.log('buy me');
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

})();

(function() {

App.ModalController = Ember.ObjectController.extend({
  actions: {
    close: function() {
      return this.send('closeModal');
    }
  }
});


})();

(function() {

App.PhotoViewerController = Ember.ObjectController.extend({
    needs: ['PhotosPhoto'],
    actions: {

    }
});


})();

(function() {

App.PhotosCreateController = Ember.Controller.extend({
    actions: {
        uploadPhoto: function() {

        }
    }
});

App.PhotosPhotoController = Ember.Controller.extend({
    needs: ['photos'],
    getPhotoIdList: function() {
        var photosController = this.get('controllers.photos');
        var photos = photosController.get('content');
        if (!Em.isEmpty(photos)) {
            return photos.map(function(record) {
                return record.get('id');
            });
        }
        return [];
    },
    getNextId: function(direction, model) {
        if (!model) {
            var currentId = this.get('model').id;    
        } else {
            var currentId = model.id;
        }
        
        var photoIdList = this.getPhotoIdList();
        var currentIdIndex = photoIdList.indexOf(currentId);
        var nextId;

        if (direction === 'forward') {
            if (currentIdIndex + 1 === photoIdList.length) {
                nextId = photoIdList[0];
            } else {
                nextId = photoIdList[currentIdIndex + 1];
            }
        } else if (direction === 'backwards') {
            if (currentIdIndex === 0) {
                nextId = photoIdList[photoIdList.length - 1];
            } else {
                nextId = photoIdList[currentIdIndex - 1];
            }
        }
        return nextId;
    },
    actions: {
        forward: function(model) {
            this.transitionToRoute('photos.photo', this.getNextId('forward', model));
        },
        backwards: function(model) {
            this.transitionToRoute('photos.photo', this.getNextId('backwards', model));
        },
        close: function (model) {
            console.log('close hit');
            this.transitionToRoute('photos');
        }
    },
    isEditing: false
});


})();

(function() {

App.StoreIndexController = Ember.ArrayController.extend({
  line_items: [],
  items_in_cart: (function() {
    return this.get('line_items');
  }).property('line_items'),
  total_price: (function() {
    var total;
    total = 0;
    if (this.get('line_items').length > 0) {
      this.get('line_items').forEach(function(line_item) {
        var quantity;
        quantity = line_item.quantity;
        return total += line_item.price * quantity;
      });
    }
    return total;
  }).property('line_items.@each.quantity')
});

})();

(function() {

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

})();

(function() {

  // Article
  App.Article = DS.Model.extend({
    title: DS.attr('string'),
    articleContent: DS.attr('string'),
    type: DS.attr('string'),
    urlSegment: DS.attr('string'),
    slug: function() {
		var slug = this.get('title').toString().toLowerCase().replace(/[^a-z0-9]+/g, '-');
		this.set('urlSegment', slug);
      return slug;
  }.property('title')
  });

})();

(function() {

//Item
App.Item = DS.Model.extend({
    name: DS.attr('string'),
    itemDesc: DS.attr('string'),
    type: DS.attr('string'),
    photo: DS.attr('string'),
    value: DS.attr('string'),
    rate: DS.attr('string'),
    username: DS.attr('string'),
    userAuth: DS.attr('string'),
    userid: DS.belongsTo('user')
});

})();

(function() {

   // Article
  App.Photo = DS.Model.extend({
      name: DS.attr('string'),
      path: DS.attr('string'),
      src: function() {
          return this.get('path') + this.get('name');
      }.property('path', 'name')
  });


})();

(function() {

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

})();

(function() {

App.ApplicationRoute = Ember.Route.extend({
    model: function() {
        // return this.store.find('admin', '53694c9ecd2fdd72457e95c3');
    },
    activate: function() {
        if (window.flash) {
            this.woof.danger(window.flash);    
        }        
    },
    actions: {
        openModal: function(modalName, model) {
            this.controllerFor(modalName).set('model', model);
            this.render(modalName, {
                into: 'application',
                outlet: 'modal'
            });
        },
        closeModal: function() {
            this.disconnectOutlet({
                outlet: 'modal',
                parentView: 'application'
            });
        },
        addDanger: function() {
            this.woof.danger('This is a danger alert!');
        },
        addWarning: function() {
            this.woof.warning('This is a warning alert!');
        },
        addInfo: function() {
            this.woof.info('This is an info alert!');
        },
        addSuccess: function() {
            this.woof.success('This is a success alert!');
        }
    }
});

})();

(function() {

App.ArticlesIndexRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('article');
    }
});

App.ArticlesArticleRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('article', params.article_id);
    }
});

App.ArticlesCreateRoute = Ember.Route.extend({
    model: function() {
        return this.store.createRecord('article', {
            title: '',
            pageContent: '',
            urlSegment: ''
        });
    }
});

})();

(function() {

App.CatchallRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('item', {
            urlSegment: params.url
        });
    }
});

})();

(function() {

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return Em.Object.create({name: 'king kong'});
  }
});

})();

(function() {

App.ItemsIndexRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('item');
    }
});

App.ItemsItemRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('item', params.item_id);
    }
});

App.ItemsCreateRoute = Ember.Route.extend({
    model: function() {
        return this.store.createRecord('item', {
            name: '',
            pageContent: '',
            urlSegment: ''
        });
    }
});

})();

(function() {

App.PhotosRoute = Ember.Route.extend({
    model: function () {
 	 	return this.store.find('photo');
    }
});

App.PhotosPhotoRoute = Ember.Route.extend({
    model: function (params) {
      return this.store.find('photo', params.photo_id);
    }
});

App.PhotosCreateRoute = Ember.Route.extend({
});



})();

(function() {

App.SearchResultsRoute = Ember.Route.extend({
    model: function(params) {
        console.log(params);
        return this.store.find('item', params);
    }
});

})();

(function() {

App.UsersUserRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('user', params.user_id);
    }
});

})();

(function() {

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

})();

(function() {

App.AutoCompleAddressView = Ember.TextField.extend({
    type: 'text',
    attributeBindings: ['placeholder', 'style', 'value'],
    style: 'width:25em',
    placeholder: 'Where do you live?',
    didInsertElement: function() {
        var options = {
            
      types: ['(cities)'],
            componentRestrictions: {
                country: 'gb'
            }
        };
        //this.$() return the element as an array form, but google autocomplete seems to not accept this. So take the first one.
        new google.maps.places.Autocomplete(this.$()[0], options);

    }
});

})();

(function() {

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

})();

(function() {

App.PhotosIndexView = Ember.View.extend({
    didInsertElement: function() {
      $('#tiles').imagesLoaded(function() {
        $('.loader').hide();
        // Prepare layout options.
        var options = {
          itemWidth: 300, // Optional min width of a grid item
          autoResize: true, // This will auto-update the layout when the browser window is resized.
          container: $('#tiles'), // Optional, used for some extra CSS styling
          offset: 0 , // Optional, the distance between grid items
          outerOffset: 0, // Optional the distance from grid to parent
          flexibleWidth: '50%' // Optional, the maximum width of a grid item
        };

        // Get a reference to your grid items.
        var handler = $('#tiles li');

        var $window = $(window);
        $window.resize(function() {
          var windowWidth = $window.width(),
              newOptions = { flexibleWidth: '50%' };

          // Breakpoint
          if (windowWidth < 1024) {
            newOptions.flexibleWidth = '100%';
          }

          handler.wookmark(newOptions);
        });

        // Call the layout function.
        handler.wookmark(options);
      });
    
      $('#tiles img').mouseenter(function (e) {
        $(e.target).siblings('p').show();
      })
      $('#tiles img').mouseleave(function (e) {
        $(e.target).siblings('p').hide();
      })      
    }
});


})();

(function() {

App.PhotoViewerView = Ember.View.extend({
    eventManager: Ember.Object.create({
        keyDown: function(event, view) {
            // escape 
            if (event.keyCode === 27) {
                view.get('controller.controllers.PhotosPhoto').send('close', view.get('controller').content);
            }
            // right arrow
            if (event.keyCode === 39) {
                view.get('controller.controllers.PhotosPhoto').send('forward', view.get('controller').content);
            }

            // left arrow
            if (event.keyCode === 37) {
                view.get('controller.controllers.PhotosPhoto').send('backwards', view.get('controller').content);
            }

        }
    }),
    didInsertElement: function() {
        //fix for catching key events
        this.$().attr('tabindex', 0);
        this.$().focus();

        this.setViewerHeight();
        $('.photo').imagesLoaded(function() {
            $('.full-size-photo-viewer').css('opacity', 1);
        });

        var self = this;
        $(window).resize(function() {
            self.setViewerHeight();
        });
    },
    setViewerHeight: function() {
        var height = $(window).height() - 50;
        $('.photo').height(height);
        $('.side-panel').height(height);
    }
});


})();

(function() {

App.ProductItemView = Ember.View.extend(App.DraggableMixin, {
  templateName: 'product_item'
});

})();

(function() {

App.FileUploadComponent = Ember.FileField.extend({
  url: '',
  multiple: true,
  filesDidChange: (function() {
    var uploadUrl = this.get('url');
    var files = this.get('files');

    var uploader = Ember.Uploader.create({
      url: uploadUrl
    });

    if (!Ember.isEmpty(files)) {
      uploader.upload(files);
    }
  }).observes('files')
});

})();

(function() {

App.FileUploadDraggableComponent = Ember.Component.extend(App.DroppableMixin, {
    classNames: ['basket'],
    drop: function(e) {
        e.stopPropagation(); // Stops some browsers from redirecting.
        e.preventDefault();

        var files = e.dataTransfer.files;
        var uploadUrl = this.get('url');
        var uploaded = 0;

        var uploader = Ember.Uploader.create({
            url: uploadUrl
        });

        uploader.on('progress', function(e) {
            // Handle progress changes
            // Use `e.percent` to get percentag

            // TODO this no longer makes sense till i can make individual file progress bars
            // $('.upload-progress').html(e.percent + '%');
        });

        uploader.on('didUpload', function(e) {
            // Handle finished upload
            uploaded++;
            $('.upload-progress').html('Upload ' + uploaded  + ' of ' + files.length +' finished'); 
        });

        if (!Ember.isEmpty(files)) {
            uploader.upload(files);
        }
    }
});


})();

(function() {

App.XWoofComponent = Ember.Component.extend({
  classNames: 'woof-messages',
  messages: Ember.computed.alias('woof')
});


})();

(function() {

App.XWoofMessageComponent = Ember.Component.extend({
  classNames: ['x-woof-message-container'],
  classNameBindings: ['insertState'],
  insertState: 'pre-insert',
  didInsertElement: function() {
    var self = this;
    self.$().bind('webkitTransitionEnd', function(event) {
      if (self.get('insertState') === 'destroyed') {
        self.woof.removeObject(self.get('message'));
      }
    });
    Ember.run.later(function() {
      self.set('insertState', 'inserted');
    }, 250);
    
    if (self.woof.timeout) {
      Ember.run.later(function() {
        self.set('insertState', 'destroyed');
      }, self.woof.timeout);
    }
  },

  click: function() {
    var self = this;
    self.set('insertState', 'destroyed');
  }
});

})();

(function() {

App.ModalDialogComponent = Ember.Component.extend({
    actions: {
        close: function() {
            return this.sendAction();
        }
    },
    didInsertElement: function() {
        $('#modalDialog').modal({
            'show': true
        });
    },
    willDestroyElement: function() {
		$('#modalDialog').modal('hide');
    }
});


})();

(function() {

App.RadioButton = Ember.Component.extend({
    tagName : "input",
    type : "radio",
    attributeBindings : [ "name", "type", "value", "checked:checked" ],
    click : function() {
        this.set("selection", this.$().val());
    },
    checked : function() {
        return this.get("value") === this.get("selection");
    }.property('selection')

});

})();

(function() {

App.Router.map(function() {
    this.route('catchall', {
        path: '/*url'
    }); // catch-all routes

    this.resource('articles', function() {
        this.route('create', {
            path: '/create'
        });
        this.route('article', {
            path: ':article_id'
        });
    });
    this.resource('photos', function() {
        this.route('create', {
            path: '/create'
        });
        this.route('photo', {
            path: ':photo_id'
        });
    });

    this.resource('users', function() {
        this.route('user', {
            path: ':user_id'
        });
    });
    this.resource('items', function() {
        this.route('create', {
            path: '/create'
        });
        this.route('item', {
            path: ':item_id'
        });
    });
    this.resource('search', {
        path: '/search'
    }, function() {
        this.route('results', {
            path: ':keyword'
        });
    });

});

})();

(function() {

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

})();

(function() {

Ember.Handlebars.helper("cleanUrl", function(title) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
});



})();

(function() {

var DateFormats = {
    short: "DD MMMM - YYYY",
    long: "dddd DD.MM.YYYY HH:mm"
};

Ember.Handlebars.helper("formatDate", function(datetime, format) {
    if (moment) {
        f = DateFormats[format];
        return moment(datetime).format(f);
    } else {
        return datetime;
    }
});

Ember.Handlebars.helper("test", function(text, url) {
    return new Ember.Handlebars.SafeString(
        "<a href='" + url + "'>" + text + "</a>"
    );
});

})();

(function() {

Ember.Handlebars.helper('radio-button', App.RadioButton);

})();

(function() {

Ember.Woof = Ember.ArrayProxy.extend({
  content: Ember.A(),
  timeout: 2000,
  pushObject: function(object) {
    object.typeClass = 'alert-' + object.type;
    this._super(object);
  },
  danger: function(message) {
    this.pushObject({
      type: 'danger',
      message: message
    });
  },
  warning: function(message) {
    this.pushObject({
      type: 'warning',
      message: message
    });
  },
  info: function(message) {
    this.pushObject({
      type: 'info',
      message: message
    });
  },
  success: function(message) {
    this.pushObject({
      type: 'success',
      message: message
    });
  }
});


})();

(function() {

Ember.Application.initializer({
  name: "registerWoofMessages",

  initialize: function(container, application) {
    application.register('woof:main', Ember.Woof);
  }
});

Ember.Application.initializer({
  name: "injectWoofMessages",

  initialize: function(container, application) {
    application.inject('controller', 'woof', 'woof:main');
    application.inject('component',  'woof', 'woof:main');
    application.inject('route',      'woof', 'woof:main');
  }
});


})();

(function() {

App.ApplicationSerializer = DS.RESTSerializer.extend({
  primaryKey: '_id'
});

})();//@ sourceMappingURL=combined-scripts.js.map