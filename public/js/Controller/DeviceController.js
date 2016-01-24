app.controller('DeviceController', function($scope, $http, $location, data) {
    $scope.locals = data.data;

    $scope.$watch('idLocal', function () 
    {
        if($scope.idLocal != undefined)
        {
            $http.get("/data/local/" + $scope.idLocal + "/device")
            .success(function(response) {
                $scope.devices = response;
                $scope.tmp = response;
                $scope.search = undefined;
            });
        }
    });

	$scope.$watch('search', function () 
    {
        if($scope.search != undefined)
        {
        	$scope.devices = [];

            for(var i = 0 ; i < $scope.tmp.length ; i++)
            {
            	if($scope.tmp[i].name.toLowerCase().search($scope.search.toLowerCase()) > -1)
            	{
            		$scope.devices.push($scope.tmp[i]);
            	}
            }
        }
    });

    $scope.getInfo = function(device_id) {
        $location.path('/device/' + device_id + '/info');
    }
});