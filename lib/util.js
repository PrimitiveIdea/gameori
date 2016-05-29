'use strict';

// declaration =================================================================
var fs = require('fs');

// functions ===================================================================
function loadConfig() { // load configuration
	var configPath = process.cwd() + '/config/env';
	process.env.NODE_ENV = ~fs.readdirSync(configPath).map(function(file) {
		return file.slice(0, -3);
	}).indexOf(process.env.NODE_ENV) ? process.env.NODE_ENV : 'development';
    return require(configPath + '/' + process.env.NODE_ENV) || {};
}

// export functions ============================================================
exports.loadConfig = loadConfig;