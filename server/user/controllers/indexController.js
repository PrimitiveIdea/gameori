'use strict'

var indexModel = require('../../models/indexModel');
var indexController;

var getGames = function (req, res){
    indexModel.find({}, function (err, doc) {
        if (err) {
            res.send(err);
        }

        if (!doc) {
            res.send("");
        }
        else {
            res.send(doc);
        }
    });
};

indexController = {
    getGames: getGames
};

module.exports = indexController;