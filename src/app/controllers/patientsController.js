controllers.controller('PatientsController',['$scope','$location', 'patientsService', 'patientsServiceMysql' ,
	function PatientsController($scope, $location, patientsService, patientsServiceMysql){
			
			$scope.patients = null;

			function initialize(){
				//$scope.patients = patientsService.getPatients();
				patientsServiceMysql.getPatients().then(function(result){
					$scope.patients = result;
					//$scope.gridOptions = result;
				});

				$scope.gridOptions = {
					data: 'patients',
					columnDefs:[
						//{field: 'name', displayName: 'Nombre', width: '20%'},
						//{field: 'name', displayName: 'NombreLink', width: '20%', cellTemplate: '<div class="ngCellText"><a href="#/patient/{{row.getProperty("\'id\'")}}">{{row.getProperty(col.field)}}</a></div>'},
						{field: 'id', displayName: 'Name', width: '40%', cellTemplate: '<div class="ngCellText"><a href="#/patient/{{row.getProperty(col.field)}}">{{row.getProperty("name")}}</a></div>'},
						//{field: 'cip', displayName: 'CIP', width: '20%'},
						//{field: 'hosp', displayName: 'NHC Hosp', width: '20%'},
						{field: 'lastname', displayName: 'LastName', width: '20%'},
						{field: 'lastname2', displayName: 'LastName2', width: '20%'},
						{field: 'dni', displayName: 'DNI', width: '20%'}
					]
				};

				$scope.newPatientCommand = function(){
					$location.url('/patient');
				};
			};
		
		initialize();
 	}

 ]);
 
/*
 controllers.controller("PatientsController", ['$scope','patientsService', function($scope,patientsService){
	var scope = $scope;
	scope.patients = patientsService.getPatients();

	scope.metodoScope = function(){
		scope.datoScope = "otra cosa";
}
}]);
*/