var routes;
var indexController = require('./user/controllers/index');

// api ===============================================================
routes = function (app) {
    // get all todos
    app.get('/api/todos', function (req, res) {
        indexController.getTodos(res);
    });

    // create todo and send back all todos after creation
    app.get('/api/game/:game_title', function (req, res) {

        // create a todo, information comes from AJAX request from Angular
        indexController.getGameProduct(req.params.game_title);

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

    // base page
    app.get('*', function (req, res) {
        res.sendFile(__base + '/public/user/views/base.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};

module.exports = routes;