angular.module('contactModule', [])
    .controller('contactController', ['$scope','$routeParams','$location','contact',
        function($scope, $routeParams, $location, contact) {

        $scope.contact_name = "Name";
        $scope.contact_email = "Email";
        $scope.contact_subject = "Subject";
        $scope.contact_message = "Message";

        $scope.postContact = function() {
            contact.post($scope)
                .success(function(data){
                    $scope.gameComments = data;
                    $scope.contact_name = "Name";
                    $scope.contact_email = "Email";
                    $scope.contact_subject = "Subject";
                    $scope.contact_message = "Message";
                    $scope.status = "Message Sent";
                });
        }
    }]);