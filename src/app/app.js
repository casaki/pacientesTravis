var app = angular.module('app', [
	'ngRoute', 
	'ngGrid',
	'ui.bootstrap',
	'ngMessages',
	'lcValidationSummary',
	'riatecui',
	'app.services',
	'app.controllers',
	'app.directives']).config(['$httpProvider','$routeProvider',function ($httpProvider,$routeProvider){  //provide configuran servicios. se ejecuta antes de armar los servicios
		$httpProvider.defaults.useXDomain = true; //que use por defecto cross domain
		delete $httpProvider.defaults.headers.common['X-Request-With'];

		$routeProvider
			.when('/',
			{
				controller:'PatientsController',
				templateUrl: 'app/controllers/patients.html'
			})
			.when('/patient/:patientId?',
			{
				controller:'PatientController',
				templateUrl: 'app/controllers/patient.html'
			});
	}
	])

	.run(['datepickerPopupConfig', function(datepickerPopupConfig){
		//TRANSLATION
        datepickerPopupConfig.currentText = 'Hoy';
        datepickerPopupConfig.clearText = 'Borrar';
        datepickerPopupConfig.closeText = 'Cerrar';

	}]);

	//$route
	//$httpProvide
	//.config configuras proveedores. Un ejemplo de proovedor ...