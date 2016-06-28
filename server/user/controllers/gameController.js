'use strict'

var gameModel = require('../../models/gameModel');
var gameController;

var getAllGames = function (req, res){
        gameModel.find({}, function (err, doc) {
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

