angular.module('amazonService', [])
    .factory('amazonData', ['$http',function($http) {
            return {
                get: function(game_id) {
                    return $http.get('/api/aws/' + game_id);
                }
            }
    }]);