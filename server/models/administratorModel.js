'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;
var administratorSchema = new schema({
    username: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: ''
    }
});
var administratorModel = mongoose.model('administrators', administratorSchema);

module.exports = administratorModel;