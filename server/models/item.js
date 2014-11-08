/**
 * Module Dependencies.
 */
var mongoose = require('mongoose'),
    config = require('../config/config'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

/**
 * Item Schema
 */
var ItemSchema = new Schema({
    added: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        default: '',
        trim: true
    },
    template: {
        type: Schema.ObjectId,
        ref: 'Template'
    },
    itemDesc: {
        type: Object,
        default: {}
    },
    userid: {
        type: String
    },
    username: {
        type: String
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    type: {
        type: String,
        trim: true
    },
    id: {
        type: ObjectId,
        trim: true
    },
    rate: {
        type: String,
        trim: true
    },
    value: {
        type: String,
        trim: true
    },
    BoD: {
        type: Array,
        default: []
    },
    photo: {
        type: String,
        default: '',
        trim: true
    },
    brand: {
        type: String,
        default: '',
        trim: true
    }
}, {
    versionKey: false,
    id: true
});

/**
 * Validations
 */
ItemSchema.path('name').validate(function(name) {
    return name.length;
}, 'Name cannot be blank');


/**
 * Statics
 */

ItemSchema.statics = {
    //load statics by id, populates user nested object
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).populate('user', 'name username').exec(cb);

    },
    //query static finds by other query params, populates the nested object again
    query: function(query, cb) {
        this.findOne(query).populate('user', 'name username').exec(cb);
    }
};

mongoose.model('Item', ItemSchema);