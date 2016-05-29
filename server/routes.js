var routes;
var indexController = require('./user/controllers/index');

// api ===============================================================
routes = function (app) {
    // get all todos
    app.get('/api/todos', function (req, res) {
        indexController.getTodos(res);
    });

    // create todo and send back all todos after creation
    app.post('/api/todos', function (req, res) {

        // create a todo, information comes from AJAX request from Angular
        Todo.create({
            text: req.body.text,
            done: false
        }, function (err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            getTodos(res);
        });

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

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__base + '/public/user/views/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};

module.exports = routes;