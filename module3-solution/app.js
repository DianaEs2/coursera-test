(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      foundItems: '<',
      onRemove: '&'
    },
    restrict: 'E',
    controller: NarrowItDownController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;

  ctrl.getMatchedMenuItems = function() {
    var searchTerm = ctrl.searchTerm;
    if (!searchTerm || 0 === searchTerm.length ) {
      ctrl.found = [];
      return;
    }
    var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
    promise.then(function (response) {
        ctrl.found = response;
       })
      .catch(function (error) {
        console.log("Something went terribly wrong.");
      });
    };

    ctrl.removeItem = function (itemIndex) {
      console.log("to be removed " + itemIndex);
      ctrl.found.splice(itemIndex, 1);
    };

    ctrl.isEmpty = function() {
      var items =  ctrl.foundItems;
      return items != undefined && items.length == 0;
    }
};

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    var promise = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
    });

    return promise.then(function (response) {
        // process result and only keep items that match
        var foundItems = [];
        var menu_items = response.data.menu_items;
        for (var i = 0; i < menu_items.length; i++) {
          var description = menu_items[i].description;
          if (description.indexOf(searchTerm) != -1)
            foundItems.push(menu_items[i]);
        }
        // return processed items
        return foundItems;
       })
      .catch(function (error) {
        console.log("Something went terribly wrong.");
      });
  };
};

})();
