'use strict';

describe('Controller: ChhCtrl', function () {

  // load the controller's module
  beforeEach(module('ajsApp'));

  var ChhCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChhCtrl = $controller('ChhCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
