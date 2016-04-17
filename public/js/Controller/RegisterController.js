app.controller('RegisterController', function($scope, $http, $location) {
    $scope.register = function() {
        if($scope.username == undefined || $scope.username == "" || $scope.email == undefined || $scope.email == "" || $scope.password == undefined || $scope.password == "" || $scope.password_confirmation == undefined || $scope.password_confirmation == "")
        {
            Materialize.toast("Please complete information", 2000);
        }
        else
        {
            if($scope.password != $scope.password_confirmation)
            {
                Materialize.toast("Please enter password again", 2000);
                $scope.password = "";
                $scope.password_confirmation = "";
            }
            else
            {
                $http({
                    method: 'POST',
                    url: '/user/register',
                    data: {
                        'name': $scope.username,
                        'email': $scope.email,
                        'password': $scope.password,
                        'password_confirmation': $scope.password_confirmation
                    }
                }).success(function(data) {
                    if(data == "success")
                    {
                        Materialize.toast("Success", 2000)
                        $location.path('/login');
                    }
                    else
                    {
                        Materialize.toast(data, 2000)
                    }
                });
            }
        }
    }
});