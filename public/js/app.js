var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		templateUrl: 'pages/index.html'
	});

	$routeProvider.when('/device/', {
		templateUrl: 'pages/device.html',
		controller: 'DeviceController',
		resolve: {
			data: ['$http', function($http){
				return $http.get("data/device");
			}]
		}
	});

	$routeProvider.otherwise({
		redirectTo: '/'
	});

	$locationProvider.html5Mode(true);
});