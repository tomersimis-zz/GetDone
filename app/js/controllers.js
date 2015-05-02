var getDoneControllers = angular.module('getDoneControllers', []);

getDoneControllers.controller('TaskList', function($scope, localStorageService){

	if(localStorageService.get('tasks') == null){
		localStorageService.set('tasks', []);
	}

	$scope.tasks = localStorageService.get('tasks');

	if(localStorageService.get('currentId') == null){
		localStorageService.set('currentId', 0);
	}

	$scope.currentId = localStorageService.get('currentId');

	$scope.createTask = function(){
		$scope.tasks.push({'id' : $scope.currentId,'description': $scope.description, 'date' : new Date(), 'done' : false});
		$scope.description = "";
		$scope.currentId++;
		localStorageService.set('tasks', $scope.tasks);
		localStorageService.set('currentId', $scope.currentId);
	}

	$scope.setDone = function(id){
		$scope.tasks[id].done = !$scope.tasks[id].done;
		localStorageService.set('tasks', $scope.tasks);
	}
})