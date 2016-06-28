angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/admin', {
            templateUrl: './public/admin/views/main.html',
            controller: 'mainController'
        })
        .when('/admin/game', {
            templateUrl: '../public/admin/views/postgame.html',
            controller: 'mainController'
        })
        .when('/admin/game/delete', {
            templateUrl: '../../public/admin/views/deletegame.html',
            controller: 'gameController'
        })
        .when('/admin/index/update', {
            templateUrl: '../../public/admin/views/postindex.html',
            controller: 'mainController'
        })
        .when('/admin/index/delete', {
            templateUrl: '../../public/admin/views/deleteindex.html',
            controller: 'indexController'
        })
    $locationProvider.html5Mode(true);
}]);