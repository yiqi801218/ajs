'use strict';

/**
 * @ngdoc overview
 * @name ajsApp
 * @description
 * # ajsApp
 *
 * Main module of the application.
 */
angular
  .module('ajsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/jn', {
        templateUrl: 'views/jn.html',
        controller: 'JnCtrl'
      })
      .when('/chh', {
        templateUrl: 'views/chh.html',
        controller: 'ChhCtrl'
      })
      .when('/add', {
        templateUrl: 'views/add.html',
        controller: 'AddCtrl'
      })
      .when('/list', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl'
      })
      .when('/test1', {
        templateUrl: 'views/test1.html',
        controller: 'Test1Ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
