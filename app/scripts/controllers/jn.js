'use strict';

/**
 * @ngdoc function
 * @name ajsApp.controller:JnCtrl
 * @description
 * # JnCtrl
 * Controller of the ajsApp
 */
angular.module('ajsApp')
  .controller('JnCtrl', function ($scope, $http) {
    $http.post('http://127.0.0.1:8080/ajs/data').success(function(data) {
      $scope.data = data;
    });
    /*$scope.data = [
      {"id": 1, "name": "haha",  "money": 10},
      {"id": 2, "name": "hehe",  "money": 20},
      {"id": 3, "name": "heihei", "money": 30},
      {"id": 4, "name": "hoho",  "money": 41}
    ];*/
  });
