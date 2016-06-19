'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;
var GameCommentSchema = new schema({
    title: {
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
var GameCommentModel = mongoose.model('gamescomment', GameCommentSchema, 'gamescomment');

module.exports = GameCommentModel;