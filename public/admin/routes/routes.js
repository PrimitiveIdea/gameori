'use strict'

// angular routes
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', { // homepage
            templateUrl: '../views/index.html',
            controller: 'mainController'
        })
        // .when('/product', {
        //     templateUrl: '../views/product.html',
        //     controller: 'productController'
        // })
    $locationProvider.html5Mode(true);
}]);