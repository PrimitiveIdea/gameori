var indexController;
var gameoriModel = require('../models/model');

var getTodos = function (res){
	var model = gameoriModel.getTodos();
	if (model.err) {
		res.send(model.err);
	}
	res.json(model.todos);
};

var getGameProduct = function (res){
	var gameData = gameoriModel.getGameProduct();
	if (gameData.err){
		res.send(model.err);
	}
	res.json(gameData.gameData);
};
indexController = {
	getTodos : getTodos
};

module.exports = indexController;

