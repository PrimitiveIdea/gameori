angular.module('mainModule', [])

	// inject the Todo service factory into our controller
	.controller('mainController', ['$scope','$http','reloadgames','featuringgames', 
		function($scope, $http, reloadgames, featuringgames) {

		reloadgames.get()
			.success(function(data){
				$scope.game = data;
			});
		featuringgames.get()
			.success(function(data){
				$scope.featuring_games = data;
			});
		
	}]);