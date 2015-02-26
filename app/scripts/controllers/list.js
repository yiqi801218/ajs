'use strict';

/**
 * @ngdoc function
 * @name ajsApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the ajsApp
 */
angular.module('ajsApp')
  .controller('ListCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
