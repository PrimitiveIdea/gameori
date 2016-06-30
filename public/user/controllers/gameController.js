angular.module('gameModule', [])
    .controller('gameController', ['$scope','$routeParams','$location','game','gameComment', 'amazonData',
        function($scope, $routeParams, $location, game, gameComment, amazonData) {

        $scope.comment_name = "Name";
        $scope.comment_email = "Email";
        $scope.comment_subject = "Subject";
        $scope.comment_comment = "Message";

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

        $scope.postComment = function() {
            gameComment.post($scope)
                .success(function(data){
                    gameComment.cget($scope.game_id)
                        .success(function(data){
                            $scope.gameComments = data;
                            $scope.comment_name = "Name";
                            $scope.comment_email = "Email";
                            $scope.comment_subject = "Subject";
                            $scope.comment_comment = "Message";
                        });
                });
        }
    }]);