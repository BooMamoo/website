app.controller("DeviceChartController", function ($scope, $http, $routeParams, $location, data) {
	if(data.data == 'Unauthorized')
    {
        $location.path('/error/401');
    }
    else
    {
		$scope.setChart = function() 
		{
			if($scope.chart.length != 0)
			{
				$scope.show = true;
				$scope.data = [[], [], []];
				$scope.series = ['Min Threshold', 'Max Threshold', 'Data'];
				$scope.colours = ['', '', ''];

				$scope.labels = ['00:00', '01.00', '02.00', '03.00', '04:00', '05.00', '06.00', '07.00', 
								 '08:00', '09.00', '10.00', '11.00', '12:00', '13.00', '14.00', '15.00', 
								 '16:00', '17.00', '18.00', '19.00', '20.00', '21.00', '22.00', '23.00'];

				var num = 0;

				for(var i = 0 ; i < 24 ; i++)
				{
					if(parseInt($scope.chart[num].hour) == i)
					{
						$scope.data[2][i] = $scope.chart[num].value;
						num++;
					}
					else
					{
						$scope.data[2][i] = null;
					}

					if(num == $scope.chart.length)
					{
						break;
					}
				}

				for(var i = 0 ; i < 24 ; i++)
				{
					$scope.data[0][i] = $scope.threshold.min_threshold;
					$scope.data[1][i] = $scope.threshold.max_threshold;
				}
			}

			$scope.back = function(device_id) {
				$location.path('/device/' + device_id + '/info');
			}
		}

		$scope.name = data.data.name;
		$scope.device_id = data.data.id;
		$scope.standard = data.data.standard;
		$scope.chart = data.data.chart;
		$scope.threshold = data.data.threshold[0];
		$scope.show = false;
		$scope.setChart();

		var minute = 1;

		setInterval(function() { 
			// $http({
   //              method: 'GET',
   //              url: "data/device/" + $routeParams.device + "/type/" + $routeParams.type + "/chart",
   //          }).success(function(data) {
   //              $scope.name = data.name;
			// 	$scope.device_id = data.id;
			// 	$scope.standard = data.standard;
			// 	$scope.chart = data.chart;
			// 	$scope.threshold = data.threshold[0];
			// 	$scope.show = false;
			// 	$scope.setChart();
   //          });
			window.location.reload();
		}, minute * 60000); 
	}
});