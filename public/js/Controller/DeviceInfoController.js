app.controller('DeviceInfoController', function($scope, $routeParams, $location, data) {
	if(data.data == 'Unauthorized')
    {
        $location.path('/error/401');
    }
    else
    {
		$scope.info = data.data;

		$scope.getData = function(type_id) {
			$location.path('/device/' + $routeParams.device + '/type/' + type_id + '/data');
		}

		$scope.chart = function(type_id) {
			$location.path('/device/' + $routeParams.device + '/type/' + type_id + '/chart');
		}
	}
});