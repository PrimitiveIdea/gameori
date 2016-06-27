var GameController;
var util = require(__base + '/lib/util');
var gameModel = require('../../user/models/gameModel');

var getAllGame = function (req, res){
	// uncomment below line for first run
        // game = new GameCommentModel({ 'title':'a', 'comment':'sdaksds', 'date' : Date.now, 'name' : 'Tommy'}); 
        // console.log(game);
        // game.save();
        gameModel.find({}, function (err, doc) {
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
    var game_id = req.body.game_id;

    // upload file
    var image_icon = './public/user/res/images/' + game_id + '/icon.' + util.getExtension(req.files.image_icon.name);
    var image_thumb = './public/user/res/images/' + game_id + '/thumb.' + util.getExtension(req.files.image_thumb.name);
    var image_large = './public/user/res/images/' + game_id + '/large.' + util.getExtension(req.files.image_large.name);
    var image_review = './public/user/res/images/' + game_id + '/review.' + util.getExtension(req.files.image_review.name);
    var image_banner = './public/user/res/images/' + game_id + '/banner.' + util.getExtension(req.files.image_banner.name);
    util.uploadFile(req.files.image_icon.path, image_icon);
    util.uploadFile(req.files.image_thumb.path, image_thumb);
    util.uploadFile(req.files.image_large.path, image_large);
    util.uploadFile(req.files.image_review.path, image_review);
    util.uploadFile(req.files.image_banner.path, image_banner);

	game = new gameModel(
	{
        'game_id' : req.body.game_id,
        'game_title' : req.body.game_title,
		'description' : req.body.description,
		'tag' : req.body.tag,
        'amazon_link' : req.body.amazon_link,
        'images' : {
            'image_icon' : image_icon,
            'image_thumb' : image_thumb,
            'image_large' : image_large,
            'image_review' : image_review,
            'image_banner' : image_banner
        }
	});
	game.save(function(e){
        if(e) console.log(e);
        else res.redirect('/admin');
    });
};
var deleteGame = function (req, res){
    gameModel.remove({ 'game_id' : req}, function(err,result){
        if(err) res.send(404);
        else {
            singleGameModel.find({}, function(err,doc){
                if(err) res.send(404);
                else res.send(200);
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

