'use strict'

// angular routes
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', { // homepage
            templateUrl: '../user/views/index.html',
            controller: 'indexController'
        })
    $locationProvider.html5Mode(true);
}]);