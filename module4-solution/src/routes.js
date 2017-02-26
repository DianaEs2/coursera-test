(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  // Categories page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/templates/categories.template.html',
    controller: 'MenuDataController as ctrl',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

// Item details
.state('items', {
  url: '/menu_items/{categoryId}',
  templateUrl: 'src/templates/item-detail.template.html',
  controller: 'ItemDetailController as ctrl',
  resolve: {
    items: ['$stateParams', 'MenuDataService',
    function ($stateParams, MenuDataService) {
      return MenuDataService.getItemsForCategory($stateParams.categoryId);
    }]
  }
});

}

})();
