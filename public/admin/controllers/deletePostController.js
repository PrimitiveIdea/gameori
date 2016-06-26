angular.module('deletePostModule', [])

	// inject the Todo service factory into our controller
	.controller('deletePostController', ['$scope','$http','reloadgames','deletepost', 
		function($scope, $http, reloadgames, deletepost) {

		deletepost.get()
			.success(function(data){
				$scope.game = data;
			});

		$scope.deletePost = function(id) {
			deletepost.delete(id)
				// if successful creation, call our get function to get all the new todos
				.success(function(data) {
					deletepost.get()
						.success(function(result){
							$scope.game = result;
						});
				});
		};
	}]);