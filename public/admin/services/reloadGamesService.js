angular.module('ReloadGamesService', [])

	// super simple service
	// each function returns a promise object 
	.factory('reloadgames', ['$http',function($http) {
		return {
			get : function(){
				return $http.get('api/admin/game/all');
			}
		}
	}]);