app.controller('AnalyzeController', function ($scope, $location, data, permission) {
    if(permission.data == 'admin' || permission.data == 'view')
    {
        var mapOptions = {
            zoom: 6,
            center: new google.maps.LatLng(15.870032, 100.992541),
            mapTypeId: google.maps.MapTypeId.DROP
        }

        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
        $scope.markers = [];

        var cities = data.data;

        var createMarker = function (info){
            var marker = new google.maps.Marker({
                map: $scope.map,
                position: new google.maps.LatLng(info.latitude, info.longitude),
                title: info.place + ' : ' + info.name
            });

            $scope.markers.push(marker); 
        }  
        
        for (i = 0; i < cities.length; i++){
            createMarker(cities[i]);
        }
    }
    else
    {
        $location.path('/error/401');
    }
});