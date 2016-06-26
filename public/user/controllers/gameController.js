angular.module('gameModule', [])
    .controller('gameController', ['$scope','$routeParams','$location','game',
        function($scope, $routeParams, $location, game) {

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
    }]);