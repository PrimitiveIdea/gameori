angular.module('indexService', [])
	.factory('index', ['$http', function($http) {
		return {
            cget : function(){
                return $http.get('/api/index');
            },
			delete : function(){
				return $http.delete('/api/admin/index/delete');
			}
		}
	}]);