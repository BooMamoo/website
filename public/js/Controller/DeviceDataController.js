app.controller('DeviceDataController', function($scope, $http, $location, $routeParams, data, current) {
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

		var minute = 1;

		setInterval(function() { 
			$http({
                method: 'GET',
                url: "data/device/" + $routeParams.device + "/type/" + $routeParams.type + "/data",
            }).success(function(data) {
                $scope.name = data.name;
				$scope.device_id = data.id;
				$scope.standard = data.standard;
				$scope.converts = data.convert;
				$scope.num = $scope.converts.length;
            });

            $http({
                method: 'GET',
                url: "data/device/" + $routeParams.device + "/type/" + $routeParams.type + "/current",
            }).success(function(data) {
                $scope.current = data;
            });
		}, minute * 60000); 
	}
});