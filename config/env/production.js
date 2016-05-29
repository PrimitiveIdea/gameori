'use strict';

module.exports = {
	app: {
		name: 'Gameori'
	},
	db: 'mongodb://' + process.env.OPENSHIFT_MONGODB_DB_USERNAME + ':' + process.env.OPENSHIFT_MONGODB_DB_PASSWORD + '@' + process.env.OPENSHIFT_MONGODB_DB_HOST + ':' + process.env.OPENSHIFT_MONGODB_DB_PORT + '/' + process.env.OPENSHIFT_APP_NAME,
	hostname: process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1",
    http: {
        port: process.env.OPENSHIFT_NODEJS_PORT || 8080
    }
};
