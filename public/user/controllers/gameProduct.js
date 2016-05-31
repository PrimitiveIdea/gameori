angular.module('gameproductModule', [])

	// inject the Todo service factory into our controller
	.controller('gameproductController', ['$scope','$http','gameProductService', function($scope, $http, gameProduct) {
		$scope.formData = {};
		$scope.loading = true;

		// GET =====================================================================
		// when landing on the page, get all todos and show them
		// use the service to get all the todos
		gameProduct.get($scope.gametitle)
			.success(function(data) {
				$scope.review = data.review;
			});
	}]);