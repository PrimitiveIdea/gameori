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

var createTodos = function () {
	gameoriModel.create({
        text: req.body.text,
        done: false
    }, function (err, todo) {
        if (err)
            res.send(err);

        // get and return all the todos after you create another
        getTodos(res);
    });
}

model = {
	getTodos : getTodos,
	createTodos : createTodos
}

module.exports = model;