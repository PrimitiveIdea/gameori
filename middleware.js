'use strict';

// declaration =================================================================
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var util = require(__base + '/lib/util');
var database = require(__base + '/database');
var router = require(__base + '/server/router');
var defaultConfig = util.loadConfig();
var middleware;

// middleware & app configuration ==============================================
middleware = function(app) {
    // set static folder
	app.use("/public", express.static(__dirname + "/public"));
	app.use("/vendor", express.static(__dirname + "/bower_components"));
    // express session
    app.use(session({
        secret: '2C44-4D44-WppQ38S',
        resave: true,
        saveUninitialized: true
    }));
    // set parser
	app.use(bodyParser.urlencoded({'extended': 'true'}));
	app.use(bodyParser.json());
	app.use(bodyParser.json({type: 'application/vnd.api+json'}));
    // override with the X-HTTP-Method-Override header in the request
	app.use(methodOverride('X-HTTP-Method-Override'));
    // database connectino
    database(defaultConfig);
    // routing
    router(app);
    // set app port & ip
	app.set('port', defaultConfig.http.port);
    app.set('ip', defaultConfig.hostname);
}

module.exports = middleware;