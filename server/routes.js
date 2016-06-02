var routes;
var indexController = require('./user/controllers/index');
//var adminController = require('./admin/controllers/index');

// api ===============================================================
routes = function (app) {
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
    app.get('/admin', function (req, res) {
        res.sendFile(__base + '/public/admin/views/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
    app.get('/', function (req, res) {
        res.sendFile(__base + '/public/user/views/base.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};

module.exports = routes;