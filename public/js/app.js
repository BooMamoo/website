var app = angular.module('app', ['ngRoute', 'ngResource']);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		templateUrl: 'pages/index.html',
		controller: 'IndexController'
	});

	$routeProvider.when('/device/', {
		templateUrl: 'pages/device.html',
		controller: 'DeviceController',
		resolve: {
			data: ['$http', function($http){
				return $http.get("data/local");
			}]
		}
	});

	$routeProvider.when('/device/:device/info', {
		templateUrl: 'pages/info.html',
		controller: 'DeviceInfoController',
		resolve: {
			data: ['$http', '$route', function($http, $route){
				return $http.get("data/device/" + $route.current.params.device + "/info");
			}]
		}
	});

	$routeProvider.when('/device/:device/type/:type/data', {
		templateUrl: 'pages/data.html',
		controller: 'DeviceDataController',
		resolve: {
			data: ['$http', '$route', function($http, $route){
				return $http.get("data/device/" + $route.current.params.device + "/type/" + $route.current.params.type +"/data");
			}]
		}
	});

	$routeProvider.otherwise({
		redirectTo: '/'
	});

	$locationProvider.html5Mode(true);
});