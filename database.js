'user strict'

// declaration =================================================================
var mongoose = require('mongoose');
var database;

// database connection =========================================================
database = function(defaultConfig) {
    mongoose.connect(defaultConfig.db);
}

module.exports = database;