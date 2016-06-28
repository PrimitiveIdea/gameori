'use strict'

var gameModel = require('../../models/gameModel');
var gameController;

var getAllGames = function (req, res){
    var limit = req.params.limit || 0;
    var skip = req.params.skip || 0;

    var query = gameModel.find({}).sort({date: -1}).limit(limit).skip(skip)
    query.exec(function (err, doc) {
        if (err) {
            res.send(err);
        }

        if (!doc) {
            res.send(404);
        }
        else {
            res.send(doc);
        }
    });
};
var getSingleGame = function (req, res){
    gameModel.findOne({ 'game_id':req }, function (err, doc) {
        if (err) {
            res.send(err);
        }

        if (!doc) {
            res.send(404);
        } else {
            res.json(doc);
        }
    });
}

gameController = {
    getAllGames  : getAllGames,
    getSingleGame: getSingleGame
};

module.exports = gameController;

