'use strict';

describe('Directive: scheduleRibbon', function () {

  // load the directive's module
  beforeEach(module('FrontendArchitectureApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<schedule-ribbon></schedule-ribbon>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the scheduleRibbon directive');
  }));
});
