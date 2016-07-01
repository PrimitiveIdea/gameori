'user strict'

// declaration =================================================================
var mongoose = require('mongoose');
var administratorModel = require('./server/models/administratorModel');
var database;

// database connection =========================================================
database = function(defaultConfig) {
    mongoose.connect(defaultConfig.db);
}

administratorModel.findOne({ 'username':'admin' }, function (err, doc) {
    if (!doc) {
        var admin = new administratorModel({ 'username':'admin', 'password':'mtrk213'}); admin.save();
    }
});

module.exports = database;