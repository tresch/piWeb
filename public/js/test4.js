var myApp = angular.module('myApp', []);

myApp.controller("poolController", function ($scope,$http) {

	    $scope.poolData = '10.0';

    	    $http.get('/pool').
        	success(function(data) {
	    		console.log('success', data);
            		$scope.data = data;
            		$scope.poolData = data;
		}).error(function(data, status) {
	    		console.log('error', data, status);
            		$scope.data = 'error with status code: ' + status;
        	});
});

myApp.controller("tvRoomController", function ($scope,$http) {

            $scope.tvRoomData = '10.0';

            $http.get('/tvroom').
                success(function(data) {
                        console.log('success', data);
                        $scope.data = data;
                        $scope.tvRoomData = data;
                }).error(function(data, status) {
                        console.log('error', data, status);
                        $scope.data = 'error with status code: ' + status;
                });
});


myApp.controller("garageController", function ($scope,$http) {

            $scope.garageData = '0.0';

            $http.get('/garage').
                success(function(data) {
                        console.log('success', data);
                        $scope.data = data;
                        $scope.garageData = data;
                }).error(function(data, status) {
                        console.log('error', data, status);
                        $scope.data = 'error with status code: ' + status;
                });
});

myApp.controller("bleController", function ($scope,$http) {

            $scope.bleData = '0.0';

            $http.get('/ble').
                success(function(data) {
                        console.log('success', data);
                        $scope.data = data;
                        $scope.bleData = data;
                }).error(function(data, status) {
                        console.log('error', data, status);
                        $scope.data = 'error with status code: ' + status;
                });

	});

