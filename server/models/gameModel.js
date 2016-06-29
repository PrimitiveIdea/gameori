'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;
var gameSchema = new schema({
    game_id: {
        type: String,
        default: ''
    },
    game_title:{
    	type: String,
    	default: ''
    },
    description: {
        type: String,
        default: ''
    },
    date: {
    	type: Date,
    	default: Date.now
    },
    tag: {
    	type: String,
    	default: ''
    },
    images: {
        type: Object,
        default: ''
    }
});
var gameModel = mongoose.model('games', gameSchema, 'games');

module.exports = gameModel;