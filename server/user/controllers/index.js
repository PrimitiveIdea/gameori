var indexController;
var gameoriModel = require('../models/model');

var getTodos = function (res){
	var model = gameoriModel.getTodos();
	if (model.err) {
		res.send(model.err);
	}
	res.json(model.todos);
};

var getGameProduct = function (req, res){
	var gameData = gameoriModel.getGameProduct(req);
	if (gameData.err){
		res.send(model.err);
	}
	res.json(gameData.gameData);
};

var getGameComment = function (req, res){
	var gameData = gameoriModel.getGameComment(req);
	if (gameData.err){
		res.send(model.err);
	}
	res.json(gameData.gameData);
};
indexController = {
	getTodos : getTodos,
	getGameProduct : getGameProduct,
	getGameComment : getGameComment
};

module.exports = indexController;

