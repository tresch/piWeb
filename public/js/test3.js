var myApp = angular.module('myApp', []);

myApp.controller("piWebController", function ($scope,$http) {

	    $scope.poolData = '10.0';

    	    $http.get('http://192.168.1.135:3000/pool').
        	success(function(data) {
	    		console.log('success', data);
            		$scope.data = data;
            		$scope.poolData = data;
		}).error(function(data, status) {
	    		console.log('error', data, status);
            		$scope.data = 'error with status code: ' + status;
        	});

            $scope.garageData = '0.0';

            $http.get('http://192.168.1.135:3000/garage').
                success(function(data) {
                        console.log('success', data);
                        $scope.data = data;
                        $scope.garageData = data;
                }).error(function(data, status) {
                        console.log('error', data, status);
                        $scope.data = 'error with status code: ' + status;
                });

            $scope.garageData = '0.0';

            $http.get('http://192.168.1.135:3000/garage').
                success(function(data) {
                        console.log('success', data);
                        $scope.data = data;
                        $scope.garageData = data;
                }).error(function(data, status) {
                        console.log('error', data, status);
                        $scope.data = 'error with status code: ' + status;
                });

            $scope.bleData = '0.0';

            $http.get('http://192.168.1.135:3000/ble').
                success(function(data) {
                        console.log('success', data);
                        $scope.data = data;
                        $scope.bleData = data;
                }).error(function(data, status) {
                        console.log('error', data, status);
                        $scope.data = 'error with status code: ' + status;
                });

	});

