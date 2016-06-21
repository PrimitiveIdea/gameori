'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;
var CommentGameSchema = new schema({
    title: {
        type: String,
        default: ''
    },
    nama: {
        type: String,
        default: ''
    },
    comment: {
        type: String,
        default: ''
    },
    
});
var CommentGameModel = mongoose.model('games', CommentGameSchema);

module.exports = CommentGameModel;