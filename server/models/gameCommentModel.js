'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;
var gameCommentSchema = new schema({
    game_id: {
        type: String,
        default: ''
    },
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
    comment: {
        type: String,
        default: ''
    },
    date:{
        type: Date,
        default: Date.now
    }
});
var gameCommentModel = mongoose.model('gamecomments', gameCommentSchema, 'gamecomments');

module.exports = gameCommentModel;