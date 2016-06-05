'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;
var gameoriAdmin; // database model
var model;
var adminschem = new schema({
    username: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: ''
    }
});
gameoriAdmin = mongoose.model('administrator', adminschem, 'administrator');

var findPassword = function (username) {
    //console.log(username);
   var query = gameoriAdmin.findOne({"username" : username});
   return query;
    
};


model = {
	findPassword : findPassword
}

module.exports = model;