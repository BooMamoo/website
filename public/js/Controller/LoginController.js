app.controller('LoginController', function($scope, $http, $window) {
    $scope.login = function() {
        $http({
            method: 'POST',
            url: '/user/login',
            data: {
                'email': $scope.email,
                'password': $scope.password
            }
        }).success(function(data) {
            if(data == "error")
            {
                Materialize.toast("Please login again", 2000)
            }
            else
            {
                $window.id = data.id;
                $window.name = data.name;
                $window.email = data.email;
                $window.password = $scope.password;
                window.location = '/';
            }
        });
    }
});

