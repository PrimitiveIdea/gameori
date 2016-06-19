var GameCommentController;
var GameCommentModel = require('../models/GameCommentModel');


var getGameComment = function (req, res){
	// uncomment below line for first run
        // game = new GameCommentModel({ 'title':'a', 'comment':'sdaksds', 'date' : Date.now, 'name' : 'Tommy'}); 
        // console.log(game);
        // game.save();
        GameCommentModel.find({ 'title': req }, function (err, doc) {
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
		'title' : req.body.title,
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

