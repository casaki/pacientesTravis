directives.directive('rcDni', [function () {
	return {
		require:"ngModel",   //que la directiva este en un ngmodel
		terminal: true,      //que sea la ultima directiva q se ejecute (no se pelee con la ng-pattern)

		link: function (scope, elm, attrs, ctrl){   //ctrl es un array o elemento que apunta a ngModel, attrs: atributos del elemento (text, )  ctrl[0], ctrl[1] require:"^form,ngmodel"
			var validationToExecute = function (viewValue){
				var currentTypedValue = viewValue;

				if (validateDNI(currentTypedValue)){
					ctrl.$setValidity('dni', true);  //pon el tema de validez de esta a true
				}else{
					ctrl.$setValidity('dni', false);
				}
			}

			 /*
             * Tiene que recibir el dni sin espacios ni guiones
             * Esta funcion es llamada
             * http://www.lawebdelprogramador.com/codigo/JavaScript/1992-Validar_un_CIF_NIF_y_DNI.html
             */
            function validateDNI(dni)
            {
                var lockup = 'TRWAGMYFPDXBNJZSQVHLCKE';
                var valueDni=dni.substr(0,dni.length-1);
                var letra=dni.substr(dni.length-1,1).toUpperCase();


                var patt =/^\d{8}[a-zA-Z]$/;
            
                //$log.info(patt.test("77333972F"));

                if(lockup.charAt(valueDni % 23)==letra && patt.test(dni))
                    return true;
                return false;
            }

            ctrl.$parsers.unshift(function (viewValue){  //te mete en la rueda de validacion
            	validationToExecute(viewValue);
            	return viewValue;
            });

		}
	};
}]);
