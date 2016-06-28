angular.module('gameService', [])
	.factory('game', ['$http', function($http) {
		return {
			cget : function() {
				return $http.get('/api/game/all/10/0');
			},
			delete : function(id) {
				return $http.delete('/api/admin/game/delete/' + id);
			}
		}
	}]);