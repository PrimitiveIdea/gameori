'use strict';

// declaration =================================================================
var middleware;
var router = require(__base + '/server/routes.js'); // router
var express = require('express');
var morgan = require('morgan'); // log to console
var bodyParser = require('body-parser'); // parser
var methodOverride = require('method-override');

// middleware configuration ====================================================
middleware = function (app){
	router(app);
	app.use(express.static(__dirname + '/public')); // set the static files location
	app.use(morgan('dev')); // log every request to the console
	app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
	app.use(bodyParser.json()); // parse application/json
	app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
	app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request
}

module.exports = middleware;