angular.module('mainService', [])

	// super simple service
	// each function returns a promise object 
	.factory('admin', ['$http',function($http) {
		return {
			get : function(){
				return $http.get('api/admin');
			}
		}
	}]);