app.controller('LocalController', function($scope, $http, $location, Map, permission) { 
    if(permission.data == "admin")
    {
        $scope.place = {};
        
        $scope.search = function() {
            $scope.apiError = false;
            Map.search($scope.searchPlace)
            .then(
                function(res) { // success
                    Map.addMarker(res);
                    $scope.place.name = res.name;
                    $scope.place.lat = res.geometry.location.lat();
                    $scope.place.lng = res.geometry.location.lng();
                },
                function(status) { // error
                    $scope.apiError = true;
                    $scope.apiStatus = status;
                }
            );
        }
        
        Map.init();

        $scope.$watch('place.lat', function () 
        {
            if($scope.place.lat != undefined || $scope.place.lng != undefined)
            {
                $(".lat-long").addClass("active");
            }
        });

        $scope.save = function() {
            $http({
                method: 'POST',
                url: '/admin/local',
                data: {
                    'name': $scope.local_name,
                    'place': $scope.place.name,
                    'latitude': $scope.place.lat,
                    'longitude': $scope.place.lng
                }
            }).success(function(data) {
                if(data == "true")
                {
                    Materialize.toast("Success", 2000);
                }
                else
                {
                    Materialize.toast("Fail", 2000)
                }

                $scope.local_name = "";
                $scope.place = {};
            });
        }
    }
    else
    {
        $location.path('/error/401');
    }
});
