angular.module('gameService', [])
    .factory('game', ['$http',function($http) {
            return {
                get : function(game_id) {
                    return $http.get('/api/game/' + game_id);
                }
            }
    }]);