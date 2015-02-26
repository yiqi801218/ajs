'use strict';

describe('Controller: JnCtrl', function () {

  // load the controller's module
  beforeEach(module('ajsApp'));

  var JnCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JnCtrl = $controller('JnCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
