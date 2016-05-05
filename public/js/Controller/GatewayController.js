app.controller('GatewayController', function($scope, $location, $http, $timeout, Upload, data) {
    if(data.data == 'Unauthorized')
    {
        $location.path('/error/401');
    }
    else
    {
        $scope.gateways = data.data;
        $scope.fileName = "";
        $scope.file = [];
        $scope.file[0] = "";
        $scope.show = false;

        $scope.$watch('file', function () 
        {
            if($scope.file != null && $scope.file[0] != undefined)
            {
                $scope.fileName = $scope.file[0].name;
            }
        });

        $scope.upload = function (files) 
        {
            $scope.show = true;

            if (files && files.length) 
            {
                for (var i = 0; i < files.length; i++) 
                {
                    var file = files[i];
                    Upload.upload({
                        url: 'store/gateway',
                        method: 'POST',
                        fields: {'name': $scope.fileName},
                        file: file       
                    }).success(function(data) {
                        if(data == "true")
                        {
                            Materialize.toast("Success", 2000);
                        }
                        else
                        {
                            Materialize.toast(data[0], 2000)
                        }

                       $http.get("data/gateway") 
                       .success(function(response) {
                            if(response == 'Unauthorized')
                            {
                                $location.path('/error/401');
                            }
                            else
                            {
                                $scope.gateways = response;
                            }
                       });

                        $scope.file = [];
                        $scope.file[0] = "";
                        $scope.fileName = "";
                        $scope.show = false;
                    });
                }
            }
        };

        $scope.download = function(gateway) {
            $http.get("/download/gateway/" + gateway.id).
            success(function() {
                window.location.href = gateway.path;
            });
        }

        $timeout(function() {
            $('.collapsible').collapsible({});
        }, 100);
    }
});