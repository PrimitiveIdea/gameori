angular.module('FeaturingGamesService', [])

	// super simple service
	// each function returns a promise object 
	.factory('featuringgames', ['$http',function($http) {
		return {
			get : function(){
				return $http.get('api/admin/game/featuring');
			}
		}
	}]);