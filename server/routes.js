var routes;
var indexController = require('./user/controllers/index');
var adminController = require('./admin/controllers/admin-controller');
var bodyParser = require('body-parser'); // parser
var session = require('express-session');
// api ===============================================================
var auth = function(req, res, next) {
  if (req.session && req.session.username === "tommy" && req.session.admin)
    return next();
  else
    return res.sendStatus(401);
};
routes = function (app) {
    app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
    app.use(bodyParser.json()); // parse application/json
    app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
    app.use(session({
        secret: '2C44-4D44-WppQ38S',
        resave: true,
        saveUninitialized: true
    }));
    // get all todos
    app.get('/api/todos', function (req, res) {
        indexController.getTodos(res);
    });

    // create todo and send back all todos after creation
    app.get('/api/game/:game_title', function (req, res) {

        // create a todo, information comes from AJAX request from Angular
        indexController.getGameProduct(req.params.game_title,res);

    });

    // delete a todo
    app.delete('/api/todos/:todo_id', function (req, res) {
        Todo.remove({
            _id: req.params.todo_id
        }, function (err, todo) {
            if (err)
                res.send(err);

            getTodos(res);
        });
    });

    app.get('/api/admin',function(req, res){
        res.status(200).json({'username' : 'tommy', 'password' : '12345'});
    });
    // base page
    app.get('/admin', auth, function (req, res) {
        res.sendFile(__base + '/public/admin/views/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
    app.get('/login', function (req, res) {
        res.sendFile(__base + '/public/admin/views/login.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
    app.post('/enter', function (req, res) {
        if (!req.body.username || !req.body.password) {
            //res.send('login failed'); 
            res.redirect('/login');
        } 
        else{
            /*var temp = adminController.findPassword(req.body.username).exec(function(err,data){
                if(err)
                  res.send(err);
                else{
                    if(!data){
                        res.send(401);
                    }
                    else if(data.password === req.body.password){
                        req.session.username = req.body.username;
                        req.session.admin = true;
                        res.redirect('/admin');    
                    }
                    else
                    res.send(401);                
                }
                
            });*/
            if(req.body.username === "tommy" && req.body.password === "tommycuang"){
                req.session.username = req.body.username;
                req.session.admin = true;
                res.redirect('/admin');    
            }
            else res.send(401);
        }
    });
    app.get('/', function (req, res) {
        res.sendFile(__base + '/public/user/views/base.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};

module.exports = routes;