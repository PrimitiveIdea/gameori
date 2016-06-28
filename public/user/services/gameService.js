angular.module('gameService', [])
    .factory('game', ['$http',function($http) {
            return {
                cget: function() {
                    return $http.get('/api/game/all/0/0');
                },
                get : function(game_id) {
                    return $http.get('/api/game/' + game_id);
                }
            }
    }]);