// controller declaration ============================================
var singleGameController = require('./user/controllers/singleGameController');
var GameCommentController = require('./user/controllers/GameCommentController');
var loginController = require('./admin/controllers/loginController')
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
    app.get('/admin/login', function (req, res) {
        res.sendFile(__base + '/public/admin/views/login.html');
    });
    app.post('/admin/enter', function (req, res) {
        loginController.authenticate(req, res);
    });
    app.get('/admin', auth, function (req, res) {
        res.sendFile(__base + '/public/admin/views/index.html');
    });

    // api ================================================================
    app.get('/api/game/:game_title', function (req, res) {
       singleGameController.getsingleGame(req.params.game_title,res);
    });
    app.get('/api/game/comment/:game_title', function (req, res) {
        GameCommentController.getGameComment(req.params.game_title,res);
    });
    app.post('/api/game/comment/', function (req, res) {
        GameCommentController.postGameComment(req,res);
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
