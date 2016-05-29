'use strict';

// global variabel =============================================================
global.__base = __dirname + '/';

// declaration =================================================================
var express = require('express');
var app = express(); // backend app using express
var middleware = require('./middleware.js');
var database = require('./database');
var http = require('http'); // HTTP server
var util = require('./lib/util.js'); // util file
var defaultConfig = util.loadConfig();

// middleware configuration ====================================================
middleware(app);

// database connectoin =========================================================
database(defaultConfig);

// listen (start app with node server.js) ======================================
app.set('port', defaultConfig.http.port); // app port
app.set('ip', defaultConfig.hostname); // app hostname or IP
http.createServer(app).listen(app.get('port') ,app.get('ip'), function () { // start app
    console.log("✔ Express server listening at %s:%d ", app.get('ip'),app.get('port'));
});