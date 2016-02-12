app.controller('NetpieController', function($scope, data) {
	var tmp = data.data[0].payload;

	tmp = tmp.replace(/data/g, '');
	// $scope.data = $scope.data.replace(/%5B/g, '[');
	// $scope.data = $scope.data.replace(/%5D/g, ']');
	tmp = tmp.replace(/%5B/g, '');
	tmp = tmp.replace(/%5D/g, '');
	tmp = tmp.replace(/%20/g, ' ');
	tmp = tmp.replace(/%3A/g, ':');

	tmp = tmp.split('&');

	$scope.data = [];

	for(var i = 0 ; i < tmp.length ; i++)
	{
		$scope.data.push(tmp[i].split('='));
	}
});