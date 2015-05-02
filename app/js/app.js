var getDoneApp = angular.module('getDoneApp',[
	'ngRoute',
	'getDoneControllers',
	'yaru22.angular-timeago'
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
			when('/', {
				templateUrl: 'partials/home.html'
			}).
			otherwise({
				redirectTo: '/tasks'
			})
	}
])