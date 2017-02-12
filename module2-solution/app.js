(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.itemsToBuy();

  toBuy.buyItem = function (index) {
    ShoppingListCheckOffService.buyItem(index);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;

  alreadyBought.items = ShoppingListCheckOffService.boughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var shoppingList = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donut",
      quantity: "200"
    },
    {
      name: "Cookie",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    },
    {
      name: "Bismol",
      quantity: "1"
    }
  ];

  var itemsToBuy = shoppingList;
  var boughtItems = [];

  service.itemsToBuy = function () {
    return itemsToBuy;
  };

  service.buyItem = function (index) {
    var item = itemsToBuy[index];
    itemsToBuy.splice(index, 1);
    boughtItems.push(item);
  };

  service.boughtItems = function () {
    return boughtItems;
  };
}

})();
