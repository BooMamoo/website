app.controller("DeviceChartController", function ($scope, data) {
	$scope.chart = data.data;
	$scope.data = [[]];

	$scope.labels = ['00:00', '01.00', '02.00', '03.00', '04:00', '05.00', '06.00', '07.00', 
					 '08:00', '09.00', '10.00', '11.00', '12:00', '13.00', '14.00', '15.00', 
					 '16:00', '17.00', '18.00', '19.00', '20.00', '21.00', '22.00', '23.00'];

	var num = 0;

	for(var i = 0 ; i < 24 ; i++)
	{
		if(parseInt($scope.chart[num].hour) == i)
		{
			var tmp = $scope.chart[num].timestamp.split(" ");
			tmp = tmp[1].split(":");

			$scope.data[0][i] = $scope.chart[num].value;
			num++;
		}
		else
		{
			$scope.data[0][i] = null;
		}

		if(num == $scope.chart.length)
		{
			break;
		}
	}
});