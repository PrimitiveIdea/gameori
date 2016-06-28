'use strict'

var gameCommentModel = require('../../models/gameCommentModel');
var gameCommentController;

var getGameComment = function (req, res){
    gameCommentModel.find({ 'game_id': req }, function (err, doc) {
        if (err) {
            res.send(err);
        }

        if (!doc) {
            res.send("");
        } else {
            res.send(doc);
        }
    });
};
var postGameComment = function (req, res){
	comment = new gameCommentModel(
	{
        'game_id': req.body.game_id,
        'comment': req.body.comment,
        'date'   : req.body.date,
        'name'   : req.body.name
	});
	comment.save();
	res.send(200);
}

gameCommentController = {
    getGameComment : getGameComment,
    postGameComment: postGameComment
};

module.exports = gameCommentController;

