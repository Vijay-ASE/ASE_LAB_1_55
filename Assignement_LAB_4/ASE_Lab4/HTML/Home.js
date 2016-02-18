angular.module('GoogleDirection',[])
    .controller('googlemapoutput', function ($scope,$http) {

        var map;
        var mapOptions;
        var directionsDisplay = new google.maps.DirectionsRenderer({
            draggable: true
        });
        var directionsService = new google.maps.DirectionsService();

        $scope.initialize = function () {
            var pos = new google.maps.LatLng(0, 0);
            var mapOptions = {
                zoom: 3,
                center: pos
            };

            map = new google.maps.Map(document.getElementById('map-canvas'),
                mapOptions);
        };
        $scope.calcRoute = function () {
            var end = document.getElementById('endlocation').value;
            var start = document.getElementById('source').value;

            var request = {
                origin: start,
                destination: end,
                travelMode: google.maps.TravelMode.DRIVING
            };
            directionsService.route(request, function (response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setMap(map);
                    directionsDisplay.setDirections(response);
                    console.log(status);
                }

            });
        };

        $scope.calcWeather = function (){
            document.getElementById('weather-canvas').style.visibility="visible";
            var endpoint = document.getElementById('endlocation').value;
            var start = document.getElementById('source').value;
            $scope.src=start;
            $scope.dest=endpoint;
            var resp=$http.get("http://api.openweathermap.org/data/2.5/weather?q="+start+"&units=imperial&appid=ba46ee733b337f4d3e99cdd312b0c51e");
            resp.success(function(data,status, headers,config){
                $scope.sourcetemp = data.main.temp+"` F";
                $scope.sourcedes=data.weather[0].main;
                $scope.sourcepre=data.main.pressure+" hPa";
                $scope.sourcehum=data.main.humidity+" %";
                $scope.sourcewind=data.wind.speed+" miles/hour";
                console.log("data :"+ $scope.sourcetemp);

            });
            resp.error(function(data,status,headers, config){
                window.alert("response not received 1, Something went wrong");
            });
            var resp2=$http.get("http://api.openweathermap.org/data/2.5/weather?q="+endpoint+"&units=imperial&appid=38ecd8eeadfd7905d9fb75d2c9536e63");
            resp2.success(function(data,status, headers,config){
                console.log("data :"+data.main.temp);
                $scope.desttemp = data.main.temp+"` F" ;
                $scope.destdes=data.weather[0].main;
                $scope.destpre=data.main.pressure+" hPa";
                $scope.destwind=data.wind.speed+" miles/hour";
                $scope.desthum=data.main.humidity+" %";

            });
            resp2.error(function(data,status,headers, config){
                window.alert("response not received 2, Something went wrong");
            });
        }


        google.maps.event.addDomListener(window, 'load', $scope.initialize);

    });

