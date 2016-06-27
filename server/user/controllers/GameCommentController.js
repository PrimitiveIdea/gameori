var GameCommentController;
var GameCommentModel = require('../models/gameCommentModel');


var getGameComment = function (req, res){
	// uncomment below line for first run
        // game = new GameCommentModel({ 'title':'a', 'comment':'sdaksds', 'date' : Date.now, 'name' : 'Tommy'}); 
        // console.log(game);
        // game.save();
        GameCommentModel.find({ 'game_id': req }, function (err, doc) {
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
var postGameComment = function (req, res){
	comment = new GameCommentModel(
	{
		'game_id' : req.body.game_id,
		'comment' : req.body.comment,
		'date' : req.body.date,
		'name' : req.body.name
	});
	comment.save();
	res.send(200);
}
GameCommentController = {
	getGameComment : getGameComment,
	postGameComment : postGameComment
};

module.exports = GameCommentController;

