angular.module('gameCommentService', [])
    .factory('gameComment', ['$http',
        function($http) {
            return {
                cget: function(game_id) {
                    return $http.get('/api/game/comment/' + game_id);
                },
                post: function($scope) {
                    return $http.post('/api/game/comment/add', {
                        'game_id': $scope.game_id,
                        'name': $scope.comment_name,
                        'email': $scope.comment_email,
                        'subject': $scope.comment_subject,
                        'comment': $scope.comment_comment
                    });
                }
            }
        }]);