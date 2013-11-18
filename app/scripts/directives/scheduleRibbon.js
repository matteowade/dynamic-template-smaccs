'use strict';

angular.module('FrontendArchitectureApp')
  .directive('scheduleRibbon', function ($compile) {
    
    var template = {
    	'l_desktop': 
    	"<div><div class='schedule-ribbon'>" +
	    	"<div class='schedule-ribbon-column'>Desktop Template</div>" +
	    	"<div class='schedule-ribbon-column'>Desktop Template</div>" +
	    	"<div class='schedule-ribbon-column'>Desktop Template</div>" +
	    	"<div class='schedule-ribbon-column'>Desktop Template</div>" +
    	"</div></div>",

    	'l_tablet': 
    	"<div><div class='schedule-ribbon'>" +
	    	"<div class='schedule-ribbon-column'>Tablet Template</div>" +
	    	"<div class='schedule-ribbon-column'>Tablet Template</div>" +
    	"</div></div>",

    	'l_mobile': 
	    "<div><div class='schedule-ribbon'>" +
	    	"<div>Mobile Template</div>" +
    	"</div></div>"
    };

    return {
      template: template.l_desktop,
      restrict: 'E',
      link: function postLink(scope, element, attrs, compile) {

		scope.$on('breakpointChange', function(event, breakpoint, oldClass) { 
	
			element.html(template[breakpoint.class]);
			$compile(element.contents())(scope);

		});
      }
    };
  });
