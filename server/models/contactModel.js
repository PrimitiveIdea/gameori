'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;
var contactSchema = new schema({
    name:{
        type: String,
        default: ''
    },
    email:{
        type: String,
        default: ''
    },
    subject:{
        type: String,
        default: ''
    },
    message: {
        type: String,
        default: ''
    }
});
var contactModel = mongoose.model('contacts', contactSchema, 'contacts');

module.exports = contactModel;