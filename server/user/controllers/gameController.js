var singleGameModel = require('../models/gameModel');
var gameController;

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
    getSingleGame : getSingleGame
};

module.exports = gameController;

