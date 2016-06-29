angular.module('gameModule', [])
    .controller('gameController', ['$scope','$routeParams','$location','game','gameComment', 'amazonData',
        function($scope, $routeParams, $location, game, gameComment, amazonData) {

        $scope.game_id = $routeParams.id;
        game.get($scope.game_id)
            .success(function(data){
                $scope.game = data;
            })
            .error(function(error){
                if (error == 'Not Found') {
                    $location.path('/404');
                }
            });

        gameComment.cget($scope.game_id)
            .success(function(data){
                $scope.gameComments = data;
            });

        amazonData.get($scope.game_id)
            .success(function(data){
                $scope.gameLink = data.link;
                $scope.lowestPrice = data.lowestPrice;
            });
    }]);