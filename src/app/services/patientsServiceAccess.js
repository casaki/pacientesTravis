services.factory('patientsServiceAccess',['$q','$http',function($q,$http){
	function getPatients(){
    /*
    return [ 
        {id: 1, name: 'Rosales Navarro, Miguel', 
        cip: '138000125', 
        hosp: '25430121', 
        dni:'12345678Q'},
        {id: 2, name: 'Lopez Fernandez, Maria', cip: '157300234', hosp: '25430121', dni:'22324779Q'}
       ];*/

    
    var deferred = $q.defer();   
     $http.get("http://127.0.0.1/phpaccess/patients_access.php").
     success(function (data,status,headers,config){
          deferred.resolve(data);
      }).
      error(function (data,status,headers,config){
          deferred.reject(data);
      });
    
    return deferred.promise;    


   }

   return {
   		getPatients:getPatients
   }

}]);