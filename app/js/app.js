var getDoneApp = angular.module('getDoneApp',[
	'ngRoute',
	'getDoneControllers'
]);

getDoneApp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
			when('/tasks', {
				templateUrl: 'partials/tasks-main.html',
				controller: 'TaskList'
			}).
			when('/about', {
				templateUrl: 'partials/about.html'
			}).
			otherwise({
				redirectTo: '/tasks'
			})
	}
])