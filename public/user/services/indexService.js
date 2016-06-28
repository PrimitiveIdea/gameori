angular.module('indexService', [])
    .factory('index', ['$http',function($http) {
            return {
                getIndex: function() {
                    return $http.get('/api/game/' + game_id);
                },
                getLatestGames: function() {
                    return $http.get('/api/game/all/3/0');
                },
                getNewGames: function(game_id) {
                    return $http.get('/api/game/all/8/0');
                }
            }
    }]);