'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;
var singleGameSchema = new schema({
    title: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    
});
var singleGameModel = mongoose.model('games', singleGameSchema);

module.exports = singleGameModel;