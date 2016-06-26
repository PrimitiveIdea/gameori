angular.module('mainModule', [])
	.controller('mainController', ['$scope','$location',
        function($scope, $location) {

        $scope.linkToGame = function(game_id) {
            $location.path('/game').search('id', game_id);
        }
	}]);