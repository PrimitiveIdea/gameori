var CommentGameModel = require('../models/CommentGameModel');
var CommentGameController;

var GetCommentGame = function (req, res){
        console.log(req);
        // uncomment below line for first run
        //game = new singleGameModel({ 'title':'a', 'description':'s'}); game.save();
        CommentGameModel.findOne({ 'title':req, 'nama':req, 'comment':req }, function (err, doc) {
            if (err) {
                res.send(err);
            }

            if (!doc) {
                res.send(401);
            } 
            else {
                console.log(doc.nama);
                res.json({'nama' : doc.nama, 'comment' : doc.comment});
            }
        });
}

CommentGameController = {
    GetCommentGame : GetCommentGame
};

module.exports = CommentGameController;

