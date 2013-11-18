'use strict';

describe('Service: breakpoints', function () {

  // load the service's module
  beforeEach(module('FrontendArchitectureApp'));

  // instantiate service
  var breakpoints;
  beforeEach(inject(function (_breakpoints_) {
    breakpoints = _breakpoints_;
  }));

  it('should do something', function () {
    expect(!!breakpoints).toBe(true);
  });

});
