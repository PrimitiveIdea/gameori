angular.module('ReloadGamesService', [])
	.factory('reloadgames', ['$http',function($http) {
		return {
			get : function(){
				return $http.get('api/admin/game/all');
			}
		}
	}]);