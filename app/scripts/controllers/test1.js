'use strict';

/**
 * @ngdoc function
 * @name ajsApp.controller:Test1Ctrl
 * @description
 * # Test1Ctrl
 * Controller of the ajsApp
 */
angular.module('ajsApp')
  .controller('Test1Ctrl', function ($scope) {
    $scope.clickbutton = function(){
      console.info('haha');
      console.info($scope.abc);

    };
  });


