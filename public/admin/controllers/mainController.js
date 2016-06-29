angular.module('mainModule', [])
	.controller('mainController', ['$scope','$http','$location','game','index','logout',
		function($scope, $http, $location, game, index, logout) {

		game.cget()
			.success(function(data){
				$scope.games = data;
			});

		index.cget()
			.success(function(data){
				$scope.index_games = data;
			});

		$scope.logout = function() {
            logout.post()
                .success(function(data) {
                    $location.path('/admin/login');
                    location.reload();
                });
        };
	}]);