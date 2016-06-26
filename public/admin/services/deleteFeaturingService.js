angular.module('DeleteFeaturingService', [])

	// super simple service
	// each function returns a promise object 
	.factory('deletefeaturing', ['$http',function($http) {
		return {
			delete : function(){
				return $http.delete('../../api/admin/game/featuring/delete/');
			}
		}
	}]);