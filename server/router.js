// controller declaration ============================================
var singleGameController = require('./user/controllers/singleGameController');
var GameCommentController = require('./user/controllers/GameCommentController');
var loginController = require('./admin/controllers/loginController');
var AdminGameController = require('./admin/controllers/GameController');
var featuringGameController = require('./admin/controllers/featuringGameController');
var util = require(__base + '/lib/util');
var router;
var fs = require('fs');

var auth = function(req, res, next) {
    if (req.session && req.session.username === "admin" && req.session.admin) {
        return next();
    } else {
        return res.sendStatus(401);
    }
};

router = function (app) {
    // admin page =========================================================
    app.get('/admin', auth, function (req, res) {
        res.sendFile(__base + '/public/admin/views/index-rtl.html');
    });
    app.get('/admin/login', function (req, res) {
        res.sendFile(__base + '/public/admin/views/login.html');
    });
    app.post('/admin/enter', function (req, res) {
        loginController.authenticate(req, res);
    });
    app.post('/test', function(req, res) {
        util.createDirectory('./public/user/res/test');
        util.uploadFile(req.files.displayImage.path, './public/user/res/test/test');
    });

    // api ================================================================
    app.get('/api/game/:game_title', function (req, res) {
        singleGameController.getsingleGame(req.params.game_title,res);
    });
    app.get('/api/admin/game/all', function (req, res) {
        AdminGameController.getAllGame(req,res);
    });
    app.post('/api/admin/game/add', auth,function (req, res) {
        AdminGameController.postGame(req,res);
    });
    app.delete('/api/admin/game/delete/:game_title', auth,function (req, res) {
        AdminGameController.deleteGame(req.params.game_title,res);
    });
    app.get('/api/game/comment/:game_title', function (req, res) {
        GameCommentController.getGameComment(req.params.game_title,res);
    });
    app.post('/api/game/comment/', function (req, res) {
        GameCommentController.postGameComment(req,res);
    });
    app.get('/api/game/:game_title/:game_comment', function (req, res) {
        CommentGameController.GetGameComment(req.params.game_comment,res);
    });
    app.get('/api/admin/game/featuring', function (req, res) {
        featuringGameController.getFeaturingGame(req,res);
    });
    app.post('/api/admin/game/featuring/add', auth,function (req, res) {
        featuringGameController.postFeaturingGame(req,res);
    });
    app.delete('/api/admin/game/featuring/delete', auth,function (req, res) {
        featuringGameController.deleteFeaturingGame(req,res);
    });
    // user page ==========================================================
    app.get('*', function (req, res) {
        res.sendFile(__base + '/public/user/views/base.html');
    });

    // delete a todo
    // app.delete('/api/todos/:todo_id', function (req, res) {
    //     Todo.remove({
    //         _id: req.params.todo_id
    //     }, function (err, todo) {
    //         if (err)
    //             res.send(err);

    //         getTodos(res);
    //     });
    // });
};

module.exports = router;
