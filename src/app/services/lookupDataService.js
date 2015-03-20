services.factory('lookupDataService',
	['repositorySettings', function(repositorySettings){

	function loadGenderValues(){
	    return [
	            {id:1, name: 'Mujer'},
	            {id:2, name: 'Hombre'}
	          ];
    }

  	function loadMaritalStatus(){
		return [
                {id:0, name: "Seleccione Estado"},
                {id:1, name: "Casado"},
                {id:2, name: "Soltero"}
	    ];
  	}

	function loadHospitals(){
	    return [{id:1, name:'Carlos Haya'}, 
                {id:2, name:'Clinico'}, 
                {id:3, name:'Materno'},
                {id:4, name:'Parque San Antonio'},
                {id:5, name:'Galvez'},
                {id:6, name:'Quiron'},
	                        ];  
    }

    function getLookupValues(entityName) {
      var lookupValues = [];

      switch(entityName)
      {
        case repositorySettings.lookupEntities.gender:
          lookupValues = loadGenderValues();
        break;

        case repositorySettings.lookupEntities.maritalStatus:
          lookupValues = loadMaritalStatus();
        break;

        case repositorySettings.lookupEntities.hospitals:
          lookupValues = loadHospitals();
        break;

      }

      return lookupValues;
    }

    return {
   		getLookupValues:getLookupValues
    }

}]);

