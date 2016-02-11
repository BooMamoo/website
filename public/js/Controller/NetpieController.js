app.controller('NetpieController', function($scope, data) {
	$scope.data = data.data[0].payload;
});