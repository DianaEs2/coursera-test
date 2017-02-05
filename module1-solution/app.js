(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {

    $scope.menuPlaceholder = "list comma separated dishes you usually have for lunch";
    $scope.lunchMenu = "";
    $scope.testMessage = "";

    $scope.buttonCheck = function () {
      console.log("buttonCheck");
      var lunchMenu = $scope.lunchMenu;
      if (!lunchMenu) {
        $scope.testMessage = "Please enter data first";
      } else if (lunchMenu.split(",").length <= 3) {
        $scope.testMessage = "Enjoy!";
      } else {
        $scope.testMessage = "Too much!";
      }
    };
  }
})();
