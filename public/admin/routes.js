'use strict'

// angular routes
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/admin', { 
            templateUrl: './public/admin/views/main.html',
            controller: 'mainController'
        })
        .when('/admin/post', { 
            templateUrl: '../public/admin/views/posting.html',
            controller: 'mainController'
        })
        .when('/admin/post/delete', { 
            templateUrl: '../../public/admin/views/deletepost.html',
            controller: 'deletePostController'
        })
        .when('/admin/feature/update', { 
            templateUrl: '../../public/admin/views/featuringpost.html',
            controller: 'mainController'
        })
        .when('/admin/feature/delete', { 
            templateUrl: '../../public/admin/views/deletefeaturing.html',
            controller: 'deleteFeaturingController'
        })
    $locationProvider.html5Mode(true);
}]);