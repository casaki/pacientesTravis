controllers.controller('PatientController',['$scope', '$routeParams', '$log','repositorySettings','lookupDataService','patientsService','patientsServiceAccess', 'patientsServiceMysql',
	function PatientController($scope, $routeParams, $log, repositorySettings, lookupDataService, patientsService,patientsServiceAccess, patientsServiceMysql){
			
			$scope.patients = null;
			
			function initialize(){
				//$scope.patientId = $routeParams.patientId;
				loadLookups();
				
				initializePatient();
				//createBlankPatient();
				
				//$scope.patients = patientsService.getPatients();
				

				setupCommands();

				//$scope.patients = patientsService.getPatients();
				//patientsService.getPatients().then(function(result){
				//	$scope.patients = result;
				//});
				//$scope.testBinding = "controller up and running";		        
			};

			function loadLookups(){
				$scope.genders=lookupDataService.getLookupValues(repositorySettings.lookupEntities.gender);
				$scope.maritalStatuses=lookupDataService.getLookupValues(repositorySettings.lookupEntities.maritalStatus);
				$scope.hospitals=lookupDataService.getLookupValues(repositorySettings.lookupEntities.hospitals);

/*
				$scope.hospitals = [{id:1, name:'Carlos Haya'}, 
		                    {id:2, name:'Clinico'}, 
		                    {id:3, name:'Materno'},
		                    {id:4, name:'Parque San Antonio'},
		                    {id:5, name:'Galvez'},
		                    {id:6, name:'Quiron'}
		                    ];  

		            $scope.genders = ['Hombre', 'Mujer'];          

		            $scope.genderOption = [
		            		{id:1, name:'Hombre'}, 
		                    {id:2, name:'Mujer'}
		            ];  

		             $scope.maritalStatuses = [
			            {id:0, name: "Seleccione Estado"},
			            {id:1, name: "Casado"},
			            {id:2, name: "Soltero"}
		    		];*/

			}	
		
			function initializePatient(){
				$scope.patientId = $routeParams.patientId;
				if ($scope.patientId == null){
					createBlankPatient();
				}else{
					//createBlankPatient();  //it should be loadPatient();		
					//loadPatientAccessDb();
					loadPatientMysqlDb();
					
				}

			}

			function loadPatient(){
				patientsService.getPatients().then(function(result){
						$scope.patients = result;
						//$log.info($scope.patients);
						$scope.patient=$scope.patients[$scope.patientId-1];
				});
			};

			function loadPatientAccessDb(){
				patientsServiceAccess.getPatients().then(function(result){
						$scope.patients = result;
						//$log.info($scope.patients);
						$scope.patient=$scope.patients[$scope.patientId-1];
				});
			};

			function loadPatientMysqlDb(){
				patientsServiceMysql.getPatients().then(function(result){
						$scope.patients = result;
						//$log.info($scope.patients);
						$scope.patient=$scope.patients[$scope.patientId-1];
				});
			};
			
			function createBlankPatient(){
				  $scope.patient = {
				         id: 0,
				         name: '',
				         lastname: '',
				         lastname2: '',
				         dni: '',
				         birthdate: null,
				         hospital: null,
				         maritalStatus: 0,
				         gender: 1
	   				 };

			}	

			function setupCommands(){
				    $scope.consoleDebugPatientCommand = function(){
			         	$log.info($scope.patient);
			         	//$scope.patient.name='paco';
			        } 
			        $scope.isNameFilled = function(){
			         	//$log.info($scope.patient.name==="");
			         	return $scope.patient.name!=="";
			        }  
			        $scope.isDniFilled = function(){
			         	//$log.info($scope.patient.name=='');
			         	return $scope.patient.dni!=="";
			         	//return false;
			         	//$scope.patient.name='paco';
			        }  

			}	


		initialize();
 	}

 ]);