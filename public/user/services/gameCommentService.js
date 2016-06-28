angular.module('gameCommentService', [])
    .factory('gameComment', ['$http',function($http) {
            return {
                cget: function(game_id) {
                    return $http.get('/api/game/comment/' + game_id);
                },
            }
    }]);