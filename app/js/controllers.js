var getDoneControllers = angular.module('getDoneControllers', []);

getDoneControllers.controller('TaskList', function($scope){
	$scope.tasks = [];

	$scope.createTask = function(){
		$scope.tasks.push({'description': $scope.description, 'date' : new Date()});
		$scope.description = "";
	}
})