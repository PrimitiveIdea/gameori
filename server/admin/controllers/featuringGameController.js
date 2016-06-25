var featuringGameController;
var featuringGameModel = require('../models/featuringGameModel');


var getFeaturingGame = function (req, res){
	// un below line for first run
        // game = new GameModel({ 'title':'a', '':'sdaksds', 'date' : Date.now, 'name' : 'Tommy'}); 
        // console.log(game);
        // game.save();
        featuringGameModel.find({}, function (err, doc) {
        	//console.log(doc);
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
var postFeaturingGame = function (req, res){
	featuringgame = new featuringGameModel(
	{
		'featuring' : {
            'game_id_1' : 'a',
            'game_id_2' : 'b'
        },
        'popular' : {
            'game_id_1' : 'a',
            'game_id_2' : 'b'  
        }
	});
	featuringgame.save();
	res.send(200);
};
var deleteFeaturingGame = function (req, res){
    featuringGameModel.remove({}, function(err,result){
        if(err) res.send(404);
        else {
            featuringGameModel.find({}, function(err,doc){
                if(err) res.send(404);
                else res.send(doc);
            });
        }
    });
};
featuringGameController = {
	getFeaturingGame : getFeaturingGame,
	postFeaturingGame : postFeaturingGame,
    deleteFeaturingGame : deleteFeaturingGame
};

module.exports = featuringGameController;

