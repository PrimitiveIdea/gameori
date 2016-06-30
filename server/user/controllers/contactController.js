'use strict'

var contactModel = require('../../models/contactModel');
var contactController;

var postContact = function (req, res){
	var contact = new contactModel(
	{
        'name'   : req.body.name,
        'email'  : req.body.email,
        'subject': req.body.subject,
        'message': req.body.message
	});
	contact.save();
	res.send(200);
}

contactController = {
    postContact: postContact
};

module.exports = contactController;

