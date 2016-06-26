'use strict';

// declaration =================================================================
var fs = require('fs');
var path = require('path');
var util;

// functions ===================================================================
/**
 * Load configuration from config file
 */
function loadConfig() { // load configuration frm config file
	var configPath = process.cwd() + '/config/env';
	process.env.NODE_ENV = ~fs.readdirSync(configPath).map(function(file) {
		return file.slice(0, -3);
	}).indexOf(process.env.NODE_ENV) ? process.env.NODE_ENV : 'development';
    return require(configPath + '/' + process.env.NODE_ENV) || {};
}

/**
 * Get filename extension
 *
 * @param  String filename
 */
function getExtension(filename) {
    var re = /(?:\.([^.]+))?$/;
    return re.exec(filename)[1];
}

/**
 * Create new directory
 *
 * @param  String dir ./public/user/res/images/page/[pagename]
 * @param  Boolean filename check if dir have filename or not
 */
function createDirectory(dir, filename) {
    var parts = dir.split(path.sep);

    if (filename) {
        var partsLength = parts.length - 1;
    } else {
        var partsLength = parts.length;
    }

    for( var i = 1; i <= partsLength; i++ ) {
        try {
            fs.mkdirSync( path.join.apply(null, parts.slice(0, i)) );
        } catch(e) {
            if ( e.code != 'EEXIST' ) throw e;
        }
    }
}

/**
 * Handle uploaded file
 *
 * @param  String path req.files.[input name].path
 * @param  String dir  ./public/user/res/image/page/[pagename]/[imagename]
 */
function uploadFile(path, dir) {
    createDirectory(dir, true);

    fs.readFile(path, function (err, data) {
        fs.writeFile(dir, data, function (err) {
        });
    });
}

// export functions ============================================================
util = {
    loadConfig     : loadConfig,
    getExtension   : getExtension,
    createDirectory: createDirectory,
    uploadFile     : uploadFile
}

module.exports = util;