'use strict';

/**
 * @ngdoc function
 * @name ajsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ajsApp
 */
angular.module('ajsApp')
  .controller('AboutCtrl', function ($scope) {
    console.info('about');
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
