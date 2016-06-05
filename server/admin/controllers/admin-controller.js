var adminController;
var gameoriAdmin = require('../models/admin');

var findPassword = function (username){
	var query = gameoriAdmin.findPassword(username);
	return query;
}

adminController = {
	findPassword : findPassword
};

module.exports = adminController;

