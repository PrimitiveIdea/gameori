'use strict'

var mongoose = require('mongoose');
var gameoriModel; // database model
var model;

gameoriModel = mongoose.model('gameori', {
    text: {
        type: String,
        default: ''
    }
    user: {
    	type: Object,
    	default: {}
    } 
});

var getTodos = function () {
    gameoriModel.find(function (err, todos) {
        return {err, todos};
    });
};

var getGameProduct = function(gameTitle){
    var gameData = gameoriModel.find({ title : gameTitle });
    return gameData;
}


model = {
	getTodos : getTodos,
    getGameProduct : getGameProduct
}

module.exports = model;