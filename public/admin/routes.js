'use strict'

// angular routes
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/admin', { // adminpage
            templateUrl: './public/admin/views/main.html',
            controller: 'mainController'
        })
        .when('/admin/post', { // adminpage login
            templateUrl: '../public/admin/views/posting.html',
            controller: 'mainController'
        })

    $locationProvider.html5Mode(true);
}]);