angular.module('mainModule', [])
	.controller('mainController', ['$scope','$location','index',
        function($scope, $location, index) {

        index.getNewGames()
            .success(function(data){
                $scope.new_games = data;
            });

        index.getLatestGames()
            .success(function(data){
                $scope.latest_games = data;
            });

        $scope.linkToGame = function(game_id) {
            $location.path('/game').search('id', game_id);
        }
	}]);