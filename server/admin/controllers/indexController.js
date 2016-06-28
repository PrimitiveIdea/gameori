'use strict'

var indexModel = require('../../models/indexModel');
var indexController;

var postGames = function (req, res){
    indexModel.find({},function(err,doc){
        if(doc!=""){
            res.redirect('/admin');
        }
        else{
            var indexGame = new indexModel(
            {
                'banner' : {
                    'game_id_1' : req.body.game_id_1b,
                    'game_id_2' : req.body.game_id_2b,
                    'game_id_3' : req.body.game_id_3b,
                    'game_id_4' : req.body.game_id_4b
                },
                'featuring' : {
                    'game_id_1' : req.body.game_id_1f,
                    'game_id_2' : req.body.game_id_2f,
                    'game_id_3' : req.body.game_id_3f
                },
                'popular' : {
                    'game_id_1' : req.body.game_id_1p,
                    'game_id_2' : req.body.game_id_2p,
                    'game_id_3' : req.body.game_id_3p
                }
            });
            indexGame.save(function(e){
                if(e) console.log(e);
                else res.redirect('/admin');
            });
        }
    });
};
var deleteGames = function (req, res){
    indexModel.remove({}, function(err,result){
        if(err) res.send(404);
        else {
            res.send(200);
        }
    });
};

indexController = {
    postGames  : postGames,
    deleteGames: deleteGames
};

module.exports = indexController;

