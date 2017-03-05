(function () {
"use strict";

angular.module('public')
.controller('MyInfoController',MyInfoController);

MyInfoController.$inject = ['user', 'MenuService', 'ApiPath'];
function MyInfoController(user, MenuService, ApiPath) {
  var info = this;
  info.user = user;
  if (user && user.dish) {
    MenuService.getItemDetails(user.dish).then(function(response) {
      info.dish = response.data;
      info.basePath = ApiPath;
    });
  }
}

})();
