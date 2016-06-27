'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;
var featuringGameSchema = new schema({
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
var featuringGameModel = mongoose.model('featuringgame', featuringGameSchema, 'featuringgame');

module.exports = featuringGameModel;