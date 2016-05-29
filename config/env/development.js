'use strict';

module.exports = {
    app: {
		name: 'Gameori'
	},
    db: 'mongodb://localhost/gameori',
    hostname: "127.0.0.1",
    http: {
        port: process.env.PORT || 3000,
    }
};
