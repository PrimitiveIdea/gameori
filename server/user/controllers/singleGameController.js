var singleGameModel = require('../models/singleGameModel');
var singleGameController;

var getsingleGame = function (req, res){
        //console.log(req);
        // uncomment below line for first run
        //game = new singleGameModel({ 'title':'a', 'description':'s'}); game.save();
        singleGameModel.findOne({ 'game_id':req }, function (err, doc) {
            if (err) {
                res.send(err);
            }

            if (!doc) {
                res.send(404);
            } 
            else {
                res.json(doc);
            }
        });
}

singleGameController = {
    getsingleGame : getsingleGame
};

module.exports = singleGameController;

