'use strict'

// angular routes
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', { // homepage
            templateUrl: './public/user/views/main.html',
            controller: 'mainController'
        })
        .when('/games', {
            templateUrl: './public/user/views/games.html',
            controller: 'mainController'
        })
        .when('/game/:game_id?', {
            templateUrl: './public/user/views/game.html',
            controller: 'gameController'
        })
        .when('/reviews', {
            templateUrl: './public/user/views/reviews.html',
            controller: 'mainController'
        })
        .when('/contact', {
            templateUrl: './public/user/views/contact.html',
            controller: 'mainController'
        })
        .when('/404', {
            templateUrl: './public/user/views/404.html',
            controller: 'mainController'
        })
    $locationProvider.html5Mode(true);
}]);