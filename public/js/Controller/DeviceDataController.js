app.controller('DeviceDataController', function($scope, $location, $routeParams, data, current) {
	if(data.data == 'Unauthorized')
    {
        $location.path('/error/401');
    }
    else
    {
		$scope.name = data.data.name;
		$scope.device_id = data.data.id;
		$scope.standard = data.data.standard;
		$scope.current = current.data;
		$scope.converts = data.data.convert;
		$scope.num = $scope.converts.length;

		$scope.back = function(device_id) {
			$location.path('/device/' + device_id + '/info');
		}
	}
});