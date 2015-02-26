'use strict';

/**
 * @ngdoc function
 * @name ajsApp.controller:AddCtrl
 * @description
 * # AddCtrl
 * Controller of the ajsApp
 */
angular.module('ajsApp')
  .controller('AddCtrl', function ($scope) {
    $scope.add = function() {
      console.info($scope.username+$scope.password+$scope.email);
      $scope.username = 'haha';
    };
  });
