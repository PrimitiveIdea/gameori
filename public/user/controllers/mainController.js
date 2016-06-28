angular.module('mainModule', [])
	.controller('mainController', ['$scope','$location','index','game',
        function($scope, $location, index, game) {

        index.getNewGames()
            .success(function(data){
                $scope.new_games = data;
            });

        index.getLatestGames()
            .success(function(data){
                $scope.latest_games = data;
            });

        index.getIndexGames()
            .success(function(data){
                // banner game
                game.get(data[0].banner.game_id_1)
                    .success(function(game){
                        $scope.banner1 = game;
                    })
                game.get(data[0].banner.game_id_2)
                    .success(function(game){
                        $scope.banner2 = game;
                    })
                game.get(data[0].banner.game_id_3)
                    .success(function(game){
                        $scope.banner3 = game;
                    })
                game.get(data[0].banner.game_id_4)
                    .success(function(game){
                        $scope.banner4 = game;
                    })

                // popular game
                game.get(data[0].popular.game_id_1)
                    .success(function(game){
                        $scope.popular1 = game;
                    })
                game.get(data[0].popular.game_id_2)
                    .success(function(game){
                        $scope.popular2 = game;
                    })
                game.get(data[0].popular.game_id_3)
                    .success(function(game){
                        $scope.popular3 = game;
                    })

                // featuring game
                game.get(data[0].featuring.game_id_1)
                    .success(function(game){
                        $scope.featuring1 = game;
                    })
                game.get(data[0].featuring.game_id_2)
                    .success(function(game){
                        $scope.featuring2 = game;
                    })
                game.get(data[0].featuring.game_id_3)
                    .success(function(game){
                        $scope.featuring3 = game;
                    })
            });


        $scope.linkToGame = function(game_id) {
            $location.path('/game').search('id', game_id);
        }
	}]);