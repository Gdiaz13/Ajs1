(function () {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    var ctrl = this;
    ctrl.lunchItems = "";
    ctrl.message = "";

    ctrl.checkLunchItems = function () {
      if (ctrl.lunchItems.trim() === "") {
        ctrl.message = "Please enter data first";
      } else {
        var items = ctrl.lunchItems.split(',');
        if (items.length <= 3) {
          ctrl.message = "Enjoy!";
        } else {
          ctrl.message = "Too much!";
        }
      }
    };
  }
})();
