angular.module('gameModule', [])
	.controller('gameController', ['$scope','$http','game',
		function($scope, $http, game) {

		game.cget()
			.success(function(data){
				$scope.games = data;
			});

		$scope.deleteGame = function(id) {
			game.delete(id)
				.success(function(result) {
					game.cget()
						.success(function(data){
							$scope.games = data;
						});
				});
		};
	}]);