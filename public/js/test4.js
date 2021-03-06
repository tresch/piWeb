var myApp = angular.module('myApp', []);

var intervalLength = 10000;

myApp.controller("poolController", function ($scope,$http,$interval) {

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

	    $poolTimer = $interval(function() {
    	    $http.get('/pool').
        	success(function(data) {
	    		console.log('success', data);
            		$scope.data = data;
            		$scope.poolData = data;
		}).error(function(data, status) {
	    		console.log('error', data, status);
            		$scope.data = 'error with status code: ' + status;
        	});
	    },intervalLength);
});

myApp.controller("tvRoomController", function ($scope,$http,$interval) {

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

            $tvRoomTimer = $interval(function() {
            $http.get('/tvroom').
                success(function(data) {
                        console.log('success', data);
                        $scope.data = data;
                        $scope.tvRoomData = data;
                }).error(function(data, status) {
                        console.log('error', data, status);
                        $scope.data = 'error with status code: ' + status;
                });
            },intervalLength);
});

myApp.controller("livingRoomController", function ($scope,$http,$interval) {

            $scope.livingRoomData = '10.0';

            $http.get('/livingroom').
                success(function(data) {
                        console.log('success', data);
                        $scope.data = data;
                        $scope.livingRoomData = data;
                }).error(function(data, status) {
                        console.log('error', data, status);
                        $scope.data = 'error with status code: ' + status;
                });

            $livingRoomTimer = $interval(function() {
            $http.get('/livingroom').
                success(function(data) {
                        console.log('success', data);
                        $scope.data = data;
                        $scope.livingRoomData = data;
                }).error(function(data, status) {
                        console.log('error', data, status);
                        $scope.data = 'error with status code: ' + status;
                });
            },intervalLength);
});


myApp.controller("garageController", function ($scope,$http,$interval) {

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

            $garageTimer = $interval(function() {
            $http.get('/garage').
                success(function(data) {
                        console.log('success', data);
                        $scope.data = data;
                        $scope.garageData = data;
                }).error(function(data, status) {
                        console.log('error', data, status);
                        $scope.data = 'error with status code: ' + status;
                });
            },intervalLength);
});

myApp.controller("bleController", function ($scope,$http,$interval) {

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

            $bleTimer = $interval(function() {
            $http.get('/ble').
                success(function(data) {
                        console.log('success', data);
                        $scope.data = data;
                        $scope.bleData = data;
                }).error(function(data, status) {
                        console.log('error', data, status);
                        $scope.data = 'error with status code: ' + status;
                });

            },intervalLength);
});

myApp.controller("washerController", function ($scope,$http,$interval) {

    $scope.washerData = '10.0';

    $http.get('/washer').
	success(function(data) {
	    console.log('success', data);
	    $scope.data = data;
	    $scope.washerData = data;
	}).error(function(data, status) {
	    console.log('error', data, status);
	    $scope.data = 'error with status code: ' + status;
	});

    $washerTimer = $interval(function() {
	$http.get('/washer').
	    success(function(data) {
		console.log('success', data);
		$scope.data = data;
		$scope.washerData = data;
	    }).error(function(data, status) {
		console.log('error', data, status);
		$scope.data = 'error with status code: ' + status;
	    });
    },intervalLength);
});

myApp.controller("dryerController", function ($scope,$http,$interval) {

    $scope.dryerData = '10.0';

    $http.get('/dryer').
	success(function(data) {
	    console.log('success', data);
	    $scope.data = data;
	    $scope.dryerData = data;
	}).error(function(data, status) {
	    console.log('error', data, status);
	    $scope.data = 'error with status code: ' + status;
	});

    $dryerTimer = $interval(function() {
	$http.get('/dryer').
	    success(function(data) {
		console.log('success', data);
		$scope.data = data;
		$scope.dryerData = data;
	    }).error(function(data, status) {
		console.log('error', data, status);
		$scope.data = 'error with status code: ' + status;
	    });
    },intervalLength);
});

