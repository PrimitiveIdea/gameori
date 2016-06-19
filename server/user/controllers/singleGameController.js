var singleGameModel = require('../models/singleGameModel');
var singleGameController;

var getsingleGame = function (req, res){
        //console.log(req);
        // uncomment below line for first run
        //game = new singleGameModel({ 'title':'a', 'description':'s'}); game.save();
        singleGameModel.findOne({ 'title':req }, function (err, doc) {
            if (err) {
                res.send(err);
            }

            if (!doc) {
                res.send(401);
            } 
            else {
                console.log(doc.title);
                res.json({'title' : doc.title, 'description' : doc.description});
            }
        });
}

singleGameController = {
    getsingleGame : getsingleGame
};

module.exports = singleGameController;

