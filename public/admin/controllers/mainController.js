angular.module('mainModule', [])
	.controller('mainController', ['$scope','$http','game','index',
		function($scope, $http, game, index) {

		game.cget()
			.success(function(data){
				$scope.games = data;
			});

		index.cget()
			.success(function(data){
				$scope.index_games = data;
			});
	}]);