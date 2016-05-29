'user strict'

// declaration =================================================================
var mongoose = require('mongoose'); // mongoose for mongodb

// database connection =========================================================
database = function(defaultConfig){
	mongoose.connect(defaultConfig.db); // connect to MongoDB instance
}

module.exports = database;