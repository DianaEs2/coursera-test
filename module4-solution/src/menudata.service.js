(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath) {
  var service = this;

  service.getAllCategories = function () {
    var promise = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json"),
    });

    return promise.then(function (response) {
          return response.data;
       })
      .catch(function (error) {
        console.log("getAllCategories failed.");
      });
  };

  service.getItemsForCategory = function (categoryShortName) {
    var promise = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: categoryShortName
      }
    });
    return promise.then(function (response) {
       return response.data.menu_items;
     })
     .catch(function (error) {
       console.log("getItemsForCategory failed");
     });
  };
};
})();
