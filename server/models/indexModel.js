'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;
var indexSchema = new schema({
    banner: {
        type: Object,
        default: ''
    },
    featuring: {
        type: Object,
        default: ''
    },
    popular: {
        type: Object,
        default: ''
    }
});
var indexModel = mongoose.model('index', indexSchema, 'index');

module.exports = indexModel;