angular.module('logoutService', [])
	.factory('logout', ['$http', function($http) {
		return {
            post : function(){
                return $http.post('/admin/logout');
            }
		}
	}]);