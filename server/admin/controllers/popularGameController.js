var popularGameController;
var popularGameModel = require('../models/popularGameModel');


var getPopularGame = function (req, res){
	// un below line for first run
        // game = new GameModel({ 'title':'a', '':'sdaksds', 'date' : Date.now, 'name' : 'Tommy'}); 
        // console.log(game);
        // game.save();
        popularGameModel.find({}, function (err, doc) {
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
var postPopularGame = function (req, res){
	populargame = new popularGameModel(
	{
		'game_id' : req.body.game_id,
	});
	populargame.save();
	res.send(200);
};
var deletePopularGame = function (req, res){
    popularGameModel.remove({}, function(err,result){
        if(err) res.send(404);
        else {
            popularGameModel.find({}, function(err,doc){
                if(err) res.send(404);
                else res.send(doc);
            });
        }
    });
};
popularGameController = {
	getPopularGame : getPopularGame,
	postPopularGame : postPopularGame,
    deletePopularGame : deletePopularGame
};

module.exports = popularGameController;

