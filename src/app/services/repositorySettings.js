services.factory('repositorySettings', [function() {

  var
    lookupEntities = {
        gender: 'gender',
        maritalStatus: 'maritalStatus',
        hospitals: 'hospitals'
    };


  return {
    lookupEntities : lookupEntities
  }
}]);