describe('Testing rcdni directive', function(){
	  var scope,
      elem,
      directive,
      compiled,
      html,
      ctrl,
      form;

	beforeEach(function (){
		//Load module
		module('app.directives');   //levantas directivas

		//set our view html   //definimos vista para hacer el test
		html = '<div ng-init="fields={dni: \'\'};">' + '<form name="patientform">' + 
		'<input type="text" id="dni" name="dni" rc-dni="" ng-model="fields.dni" />' + 
		'</form>' + '</div>'; 

		inject(function($compile, $rootScope, $controller){    //me pide servicio compile, rootScope y controller
			//create a scope (you could just use $rootScope, I suppose)
			scope = $rootScope.$new();
			
			//Build a sample controller  . Creamos un nuevo controlador de tipo MockDni y le pasamos el scope que hemos creado
		
			//ctrl = $controller('MockDniController', {
			//	$scope: scope
			//});

			elem = angular.element(html);

			//compile the element into a function to process the view
			compiled = $compile(elem);

			//run the compiled view
			compiled(scope);

			//call digest on the scope!  //la aplicacion no corre, angular tampoco por lo que tenemos que hacer todo manualmente
			scope.$digest();  //la ruedecita para actualizar los bindings, mira para ver si tiene que actualizar los bindings

			//get the angular form control
			form = scope.patientform;

		});

	});

	it('Inform a valid DNI', function() {   //it: cada uno de los casos que estamos probando
			form.dni.$setViewValue("68710415P");
			scope.$digest(); //le damos a la ruedecita para que chequee el binding, del value a los watch
			//test to see if we get a not valid value
			expect(form.dni.$valid).toBe(true);

	});


	it('Inform a wrong DNI', function() {   //it: cada uno de los casos que estamos probando
			form.dni.$setViewValue("25691568H");
			scope.$digest(); //le damos a la ruedecita para que chequee el binding, del value a los watch
			
			//test to see if we get a not valid value
			expect(form.dni.$valid).toBe(false);

			//jquery check ui
			var elemInvalid = $(elem[0]).find('#dni.ng-invalid');
			expect(elemInvalid.length).toEqual(1);  //existe en el html (ya que es igual a 1)

	});

});

