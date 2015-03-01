GearShed 
==========================

The Gearshed's sharing economy site is based on the MEEN Javascript stack and boilerplate (see Acknowledgements below)

### Technology Used

+ Node - Server Side
+ Express - Web Server Framework
+ Ember - Client Side MVC Framework
+ MongoDB - Database
+ Bootstrap - front end framework
+ SASS - CSS pre-processor
+ jQuery - Write less, do more
+ Grunt - The Javascript task runner
+ Bower - Client-side dependency management
+ Handlebars - Advanced templating
+ Livereload - Automatic browser reload per save
+ Mongoose - A NodeJS object modeler for MongoDB
+ Passport - User Authentication


### Acknowledgements
The Full Stack JS Boilerplate is created by [Martin Genev](http://www.twitter.com/cyberseer) of [Gemini Connect](http://www.geminiconnect.com) and is largely based on the work of [Amos Haviv](https://twitter.com/amoshaviv) on [meanjs.org](http://www.meanjs.org) 

## Prerequisites
* Node.js - Download and Install [Node.js](http://www.nodejs.org/download/). You can also follow [this gist](https://gist.github.com/isaacs/579814) for a quick and easy way to install Node.js and npm
* MongoDB - Download and Install [MongoDB](http://www.mongodb.org/downloads) - Make sure it's running on the default port (27017).

### Tools Prerequisites
* NPM - Node.js package manager, should be installed when you install node.js.
* Bower - Web package manager, installing [Bower](http://bower.io/) is simple when you have npm:

```
$ npm install -g bower
```

### Optional
* Grunt - Download and Install [Grunt](http://gruntjs.com).

## Additional Packages
* Express - Defined as npm module in the [package.json](package.json) file.
* Mongoose - Defined as npm module in the [package.json](package.json) file.
* Passport - Defined as npm module in the [package.json](package.json) file.
* EmberJs - Defined as bower module in the [bower.json](bower.json) file.
* Twitter Bootstrap for Sass - Defined as bower module in the [bower.json](bower.json) file.

## Quick Install
  The quickest way to get started with MEAN is to clone the project and utilize it like this:

  Install dependencies:

    $ npm install

  We recommend using [Grunt](https://github.com/gruntjs/grunt-cli) to start the server:

    $ grunt
    
  When not using grunt you can use:

    $ node server
    
  Then open a browser and go to:

    http://localhost:3000


### To Do:

[Alpha]
+ Change Image storage to remote storage (perhaps aws?) since Heroku doesn't allow for storage
+ Usernames, avatars, and locations on items currently only display for the user that made them
+ All dates on items currently marked as today
+ Finish Search
	+ General Search of Title, Category, and Description
	+ Location search using Google Geocoder
+ Buy/Edit buttons - show 'buy' if the item isn't mine - 'edit' if it is
+ "Orders" Section of Site - when a user places an order this section will have that order - a connection between two users 

[Beta]
+ Stripe Functionality
	+ Buy button to link up with purchases
	+ Server side implementation of purchases
	+ Verify we have a way to remit payments to person renting 
+ Google and Facebook Logins

[1.0]
+ Email system
+ Confirmation of return
+ Review system
+ Message system internally - doesn't make them deal with one another
