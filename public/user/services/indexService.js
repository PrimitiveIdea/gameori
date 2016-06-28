angular.module('indexService', [])
    .factory('index', ['$http',function($http) {
            return {
                getIndexGames: function() {
                    return $http.get('/api/index');
                },
                getLatestGames: function() {
                    return $http.get('/api/game/all/3/0');
                },
                getNewGames: function(game_id) {
                    return $http.get('/api/game/all/8/0');
                }
            }
    }]);