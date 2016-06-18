var administratorModel = require('../models/administratorModel');
var loginController;

var authenticate = function (req, res){
    if (!req.body.username || !req.body.password) {
        res.redirect('/admin/login');
    } else {
        // uncomment below line for first run
        //admin = new administratorModel({ 'username':'admin', 'password':'admin'}); admin.save();
        administratorModel.findOne({ 'username':req.body.username }, function (err, doc) {
            if (err) {
                res.send(err);
            }

            if (!doc) {
                res.send(401);
            } else if (doc.password === req.body.password) {
                req.session.username = req.body.username;
                req.session.admin = true;
                res.redirect('/admin');
            } else {
                res.send(401);
            }
        });
    }
}

loginController = {
    authenticate : authenticate
};

module.exports = loginController;

