angular.module('deleteFeaturingModule', [])

	// inject the Todo service factory into our controller
	.controller('deleteFeaturingController', ['$scope','$http','reloadgames','deletefeaturing', 
		function($scope, $http, reloadgames, deletefeaturing) {

		$scope.deleteFeaturing = function(id) {
			deletefeaturing.delete()
				.success(function(data) {
					$location.path('/admin');
					$rootScope.$apply();
				});
		};
	}]);