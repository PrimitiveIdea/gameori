'use strict'

// controller declaration =================================================
var awsController             = require('./admin/controllers/awsController');
var adminGameController       = require('./admin/controllers/gameController');
var adminIndexController      = require('./admin/controllers/indexController');
var adminLoginController      = require('./admin/controllers/loginController');
var userGameCommentController = require('./user/controllers/gameCommentController');
var userGameController        = require('./user/controllers/gameController');
var userIndexController       = require('./user/controllers/indexController');
var util = require(__base + '/lib/util');
var router;

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
        res.sendFile(__base + '/public/admin/views/base.html');
    });
    app.get('/admin/login', function (req, res) {
        res.sendFile(__base + '/public/admin/views/login.html');
    });
    app.post('/admin/enter', function (req, res) {
        adminLoginController.authenticate(req, res);
    });

    // api ================================================================
    app.get('/api/aws', function (req, res) {
        awsController.getData(req, res);
    });

    app.get('/api/game/all/:limit/:skip', function (req, res) {
        userGameController.getAllGames(req, res);
    });
    app.get('/api/game/:game_id', function (req, res) {
        userGameController.getSingleGame(req.params.game_id, res);
    });
    app.post('/api/admin/game/add', auth,function (req, res) {
        adminGameController.postGame(req, res);
    });
    app.delete('/api/admin/game/delete/:game_id', auth,function (req, res) {
        adminGameController.deleteGame(req.params.game_id, res);
    });

    app.get('/api/game/comment/:game_id', function (req, res) {
        userGameCommentController.getGameComment(req.params.game_id, res);
    });
    app.post('/api/game/comment/add', function (req, res) {
        userGameCommentController.postGameComment(req,res);
    });

    app.get('/api/index', function (req, res) {
        userIndexController.getGames(req, res);
    });
    app.post('/api/admin/index/add', auth,function (req, res) {
        adminIndexController.postGames(req, res);
    });
    app.delete('/api/admin/index/delete', auth,function (req, res) {
        adminIndexController.deleteGames(req, res);
    });

    // user page ==========================================================
    app.get('*', function (req, res) {
        res.sendFile(__base + '/public/user/views/base.html');
    });
};

module.exports = router;
