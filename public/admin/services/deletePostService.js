angular.module('DeletePostService', [])

	// super simple service
	// each function returns a promise object 
	.factory('deletepost', ['$http',function($http) {
		return {
			delete : function(id){
				return $http.delete('../../api/admin/game/delete/'+id);
			},
			get : function(){
				return $http.get('../../api/admin/game/all');	
			}
		}
	}]);