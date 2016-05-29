var indexController;
var gameoriModel = require('../models/model');

var getTodos = function (res){
	var model = gameoriModel.getTodos();
	if (model.err) {
		res.send(model.err);
	}
	res.json(model.todos);
}

indexController = {
	getTodos : getTodos
};

module.exports = indexController;

