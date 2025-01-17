
angular = require('angular');

angular.module('woin-starship')
  .controller('ShipViewCtrl', function ShipViewCtrl($scope) {
    $scope = $scope.$parent;

    $scope.calculateWeight = function(weightString) {
      try {
        var split = weightString.split(',').join('').split('-');
        var min = parseInt(split[0].trim());
        var max = parseInt(split[1].trim());

        var diff = max - min;

        var currentSpace = $scope.currentSpace();
        var maxSpace = $scope.maxSpace();

        return min + (currentSpace/maxSpace * diff);
      } catch(e) {
        return 0;
      }

    };

      $scope.calculateCrew = function() {
        return $scope.getTotalCrew();
      };

      $scope.calculateWeaponRange = function(weaponName) {
        return Math.min($scope.weaponHash[weaponName]['Range'], $scope.ship.sensor.Range);
      };

  });
