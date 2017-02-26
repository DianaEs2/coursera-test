(function () {
'use strict';

angular.module('data')
.controller('MenuDataController', MenuDataController)
.component('categories', {
  templateUrl: 'src/templates/categories.template.html',
  controller: MenuDataController,
  bindings: {
    categories: '<'
  }
});

MenuDataController.$inject = ['MenuDataService', 'categories']
function MenuDataController( MenuDataService, categories) {
  var ctrl = this;

  ctrl.categories = categories;
}

})();
