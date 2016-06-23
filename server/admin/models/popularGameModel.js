'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;
var popularGameSchema = new schema({
    game_id: {
        type: String,
        default: ''
    }
    
});
var popularGameModel = mongoose.model('populargame', popularGameSchema, 'populargame');

module.exports = popularGameModel;