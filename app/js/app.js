var getDoneApp = angular.module('getDoneApp',[
	'ngRoute'
])

getDoneApp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
			when('/tasks', {
				templateUrl: 'partials/tasks-main.html'
			}).
			when('/about', {
				templateUrl: 'partials/about.html'
			}).
			otherwise({
				redirectTo: '/tasks'
			})
	}
])