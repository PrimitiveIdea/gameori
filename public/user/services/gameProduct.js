angular.module('gameproductService', [])

	// super simple service
	// each function returns a promise object 
	.factory('gameProductService', ['$http',function($http) {
		return {
			get : function(title) {
				return $http.get('/api/game/' + title);
			}
		};
	}]);