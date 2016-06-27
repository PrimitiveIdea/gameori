'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;
var gameCommentSchema = new schema({
    game_id: {
        type: String,
        default: ''
    },
    comment: {
        type: String,
        default: ''
    },
    date:{
        type: Date,
        default: Date.now
    },
    name:{
        type: String,
        default: ''
    }
});
var gameCommentModel = mongoose.model('gamecomments', gameCommentSchema, 'gamecomments');

module.exports = gameCommentModel;