'use strict';

// global variabel =============================================================
global.__base = __dirname + '/'; // root

// declaration =================================================================
var http = require('http');
var express = require('express');
var app = express();
var middleware = require('./middleware.js');

// middleware configuration ====================================================
middleware(app);

// listen (start app with node server / nodemon server) ========================
http.createServer(app).listen(app.get('port'), app.get('ip'), function() {
    console.log("✔ Express server listening at %s:%d ", app.get('ip'),app.get('port'));
});