angular.module('gamesModule', [])
    .controller('gamesController', ['$scope','$location','game',
        function($scope, $location, game) {

        game.cget()
            .success(function(data){
                $scope.games = data;
            })
            .error(function(error){
                if (error == 'Not Found') {
                    $location.path('/404');
                }
            });

        $scope.linkToGame = function(game_id) {
            $location.path('/game').search('id', game_id);
        }
    }])