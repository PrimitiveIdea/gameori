var GameController;
var singleGameModel = require('../../user/models/singleGameModel');


var getAllGame = function (req, res){
	// uncomment below line for first run
        // game = new GameCommentModel({ 'title':'a', 'comment':'sdaksds', 'date' : Date.now, 'name' : 'Tommy'}); 
        // console.log(game);
        // game.save();
        singleGameModel.find({}, function (err, doc) {
        	//console.log(doc);
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
var postGame = function (req, res){
	game = new singleGameModel(
	{
		'game_title' : req.body.game_title,
        'game_id' : req.body.game_id,
		'description' : req.body.description,
        'amazon_link' : req.body.amazon_link,
		'date' : req.body.date,
		'tag' : req.body.tag,
        'image_link' : req.body.image_link
	});
	game.save();
	res.send(200);
};
var deleteGame = function (req, res){
    singleGameModel.remove({ 'game_id' : req}, function(err,result){
        if(err) res.send(404);
        else {
            singleGameModel.find({}, function(err,doc){
                if(err) res.send(404);
                else res.send(doc);
            });
        }
    });
};
GameController = {
	getAllGame : getAllGame,
	postGame : postGame,
    deleteGame : deleteGame
};

module.exports = GameController;

