(function() {
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.dishes = '';

    $scope.calculateItems = function() {
      if($scope.dishes.length == 0)
        $scope.message = 'Please enter data first';
      else
        $scope.message = $scope.dishes.split(',').length < 4 ? 'Enjoy!' : 'Too much!';
    }
  }
})();
