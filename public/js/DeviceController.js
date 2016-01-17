app.controller('DeviceController', function($scope, $http, data) {
	$scope.devices = data.data;

	$scope.$watch('search', function () 
    {
        if($scope.search != undefined)
        {
        	$scope.devices = [];

            for(var i = 0 ; i < data.data.length ; i++)
            {
            	if(data.data[i].name.toLowerCase().search($scope.search.toLowerCase()) > -1)
            	{
            		$scope.devices.push(data.data[i]);
            	}
            }
        }
    });
});