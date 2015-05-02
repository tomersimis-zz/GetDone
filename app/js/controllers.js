var getDoneControllers = angular.module('getDoneControllers', []);

getDoneControllers.controller('TaskList', function($scope){
	$scope.tasks = [];
	$scope.currentId = 0;

	$scope.createTask = function(){
		$scope.tasks.push({'id' : $scope.currentId,'description': $scope.description, 'date' : new Date(), 'done' : false});
		$scope.description = "";
		$scope.currentId++;
	}

	$scope.setDone = function(id){
		$scope.tasks[id].done = !$scope.tasks[id].done;
	}
})