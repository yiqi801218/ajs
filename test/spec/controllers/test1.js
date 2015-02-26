'use strict';

describe('Controller: Test1Ctrl', function () {

  // load the controller's module
  beforeEach(module('ajsApp'));

  var Test1Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Test1Ctrl = $controller('Test1Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
