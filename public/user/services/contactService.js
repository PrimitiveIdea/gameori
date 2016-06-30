angular.module('ContactService', [])
    .factory('contact', ['$http',
        function($http) {
            return {
                post: function($scope) {
                    return $http.post('/api/contact/add', {
                        'name': $scope.contact_name,
                        'email': $scope.contact_email,
                        'subject': $scope.contact_subject,
                        'message': $scope.contact_message
                    });
                }
            }
        }]);