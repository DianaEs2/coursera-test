(function () {
"use strict";

angular.module('public')
.service('MyInfoService', MyInfoService);

MyInfoService.$inject = ['MenuService', '$q'];
function MyInfoService(MenuService, $q) {
  var service = this;
  var myUser ;

  service.registerUser = function(user) {
    myUser = user;
  };

  service.retrieveUser = function() {
    return myUser;
  };

  service.dishIsValid = function (dishname) {
    var defer = $q.defer();
    if (!dishname){
      defer.resolve();
    }else {
      MenuService.getItemDetails(dishname)
      .success(function (response) {
        defer.resolve(response);
      })
      .error(function (error) {
        defer.reject(error);
      });
    }
    return defer.promise;
  };

}
})();
