
angular = require('angular');

angular.module('woin-starship')
  .controller('FacilitiesCtrl', function FacilitiesCtrl($scope) {
    var KEY = $scope.KEY = 'Facilities';
    if(!$scope.ship[KEY]) $scope.ship[KEY] = {};

    $scope.facilitiesHash = $scope.$parent.facilitiesHash;
  });