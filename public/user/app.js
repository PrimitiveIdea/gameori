'use strict'

// register all modules
angular.module('gameori', [
	'ngRoute',
	'appRoutes',
    'customFilters',
    'gameService',
    'gameCommentService',
    'indexService',
    'sharedService',
    'mainModule',
    'gamesModule',
    'gameModule']);
