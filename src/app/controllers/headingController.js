controllers.controller('HeadingController',['$rootScope', '$scope', '$location',
	function HeadingController($rootScope,$scope,$location){
		function initialize(){
			$scope.isPatientsActive = false;
			$scope.isPatientActive = false;
		}

		$rootScope.$on('$routeChangeSuccess', function () {
			var currentRoute = $location.path();			

			$scope.isPatientsActive = (currentRoute == '/');
			$scope.isPatientActive = stringBeginsWith(currentRoute, '/patient');			

		});

		function stringBeginsWith(fullString, prefixToCompare) {
          return (fullString.indexOf(prefixToCompare) === 0);
     	 }


		initialize();
	}]);

