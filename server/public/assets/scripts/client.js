var app = angular.module('myApp', []);

app.controller('MainController', ['$scope', '$http', function($scope, $http){
	$scope.assignment = {};
	$scope.assignments = [];

	var getAssignments = function() {
		return $http.get('/assignment').then(function(response){
			if(response.status !== 200) {
				throw new Error('Failed to get assignments');
			}
			$scope.assignments = response.data;
			$scope.assignment = {};
			return response.data;
		});
	};

	$scope.add = function(assignment) {
		console.log('Add function called');
		return $http.post('/assignment', assignment).then(getAssignments());
	}

	getAssignments();

// interval to check and update screen every five seconds
	setInterval(function(){
		$http.get('/assignment').then(function(response){
			if ($scope.assignments !== response.data) {
				$scope.assignments = response.data;
			}
		});
	}, 5000);

}]);
