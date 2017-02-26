(function () {
'use strict';

angular.module('data')
.controller('ItemDetailController', ItemDetailController)
.component('items', {
  templateUrl: 'src/templates/item-detail.template.html',
  controller: ItemDetailController,
  bindings: {
    items: '<'
  }
});

ItemDetailController.$inject = ['$stateParams', 'MenuDataService', 'items'];
function ItemDetailController($stateParams, MenuDataService, items) {
  var ctrl = this;

  ctrl.items = items;
}

})();
