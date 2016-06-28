angular.module('indexModule', [])
	.controller('indexController', ['$scope','$http','index',
		function($scope, $http, index) {

		$scope.deleteIndex = function(id) {
			index.delete()
				.success(function(data) {
					$location.path('/admin');
					$rootScope.$apply();
				});
		};
	}]);