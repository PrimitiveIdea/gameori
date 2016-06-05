'use strict'

// angular routes
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/admin', { // adminpage 
            templateUrl: './public/admin/views/main.html',
            controller: 'adminController'
        })

    $locationProvider.html5Mode(true);
}]);