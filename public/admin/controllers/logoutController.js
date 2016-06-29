angular.module('logoutModule', [])
	.controller('logoutController', ['$scope','$http','logout',
		function($scope, $http, logout) {

			logout.post()
				.success(function(data) {
					$location.path('/admin/login');
					$rootScope.$apply();
				});
	}]);