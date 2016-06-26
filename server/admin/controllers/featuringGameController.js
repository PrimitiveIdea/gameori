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
    featuringGameModel.find({},function(err,doc){
        if(doc!=""){
            res.redirect('/admin');
        }
        else{
            featuringgame = new featuringGameModel(
            {
                'featuring' : {
                    'game_id_1' : req.body.game_id_1f,
                    'game_id_2' : req.body.game_id_2f
                },
                'popular' : {
                    'game_id_1' : req.body.game_id_1p,
                    'game_id_2' : req.body.game_id_2p
                }
            });
            featuringgame.save(function(e){
                if(e) console.log(e);
                else res.redirect('/admin');
            });
        }
    });
	
};
var deleteFeaturingGame = function (req, res){
    featuringGameModel.remove({}, function(err,result){
        if(err) res.send(404);
        else {
            res.send(200);
        }
    });
};
featuringGameController = {
	getFeaturingGame : getFeaturingGame,
	postFeaturingGame : postFeaturingGame,
    deleteFeaturingGame : deleteFeaturingGame
};

module.exports = featuringGameController;

