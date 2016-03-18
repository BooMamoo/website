var app = angular.module('app', ['ngRoute', 'ngResource', 'chart.js']);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		templateUrl: 'pages/index.html',
		controller: 'IndexController'
	});

	$routeProvider.when('/login/', {
		templateUrl: 'pages/login.html',
		controller: 'LoginController'
	});

	$routeProvider.when('/register/', {
		templateUrl: 'pages/register.html',
		controller: 'RegisterController'
	});

	$routeProvider.when('/local/', {
		templateUrl: 'pages/local.html',
		controller: 'LocalController'
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
				return $http.get("data/device/" + $route.current.params.device + "/type/" + $route.current.params.type + "/data");
			}],
			current: ['$http', '$route', function($http, $route){
				return $http.get("data/device/" + $route.current.params.device + "/type/" + $route.current.params.type + "/current");
			}]
		}
	});

	$routeProvider.when('/device/:device/type/:type/chart', {
		templateUrl: 'pages/chart.html',
		controller: 'DeviceChartController',
		resolve: {
			data: ['$http', '$route', function($http, $route){
				return $http.get("data/device/" + $route.current.params.device + "/type/" + $route.current.params.type + "/chart");
			}]
		}
	});

	$routeProvider.when('/api', {
		templateUrl: 'pages/api.html',
		controller: 'ApiController'
	});

	$routeProvider.when('/netpie', {
		templateUrl: 'pages/netpie.html',
		controller: 'NetpieController', 
		resolve: {
			data: ['$http', '$route', function($http){
				return $http.get("data/netpie");
			}]
		}
	});


	$routeProvider.otherwise({
		redirectTo: '/'
	});

	$locationProvider.html5Mode(true);
});