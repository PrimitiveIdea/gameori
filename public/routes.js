'use strict'

// angular routes
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', { // homepage
            templateUrl: '../user/views/main.html',
            controller: 'mainController'
        })
        .when('/game/:gametitle', { // product
            templateUrl: '../user/views/game-view.html',
            controller: 'gameproductController'
        })
        .when('/admin/', {
            templateUrl: './admin/views/index.html',
            controller: 'adminController'
        })
        .when('/admin/1', {
            templateUrl: './admin/views/main.html',
            controller: 'adminController'
        })

    $locationProvider.html5Mode(true);
}]);