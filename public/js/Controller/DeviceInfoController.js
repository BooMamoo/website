app.controller('DeviceInfoController', function($scope, $routeParams, $location, data) {
	$scope.info = data.data;

	$scope.getData = function(type_id) {
		$location.path('/device/' + $routeParams.device + '/type/' + type_id + '/data');
	}
});