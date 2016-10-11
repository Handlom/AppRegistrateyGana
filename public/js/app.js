'use strict'//Define que el código JavaScript deba ejecutarse en el "modo estricto".

var app = angular.module("app", [
	'ngResource',
	'ngRoute',
	'firebase'
])
.config(function ($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'templates/form.html',
			controller:'generalCtrl'
		})
		.when('/email_template', {
			templateUrl: 'templates/email_template1.html',
			controller:'generalCtrl'
		})
		.when('/email_template', {
			templateUrl: 'templates/email_template2.html',
			controller:'generalCtrl'
		})
		.when('/email_template', {
			templateUrl: 'templates/email_template3.html',
			controller:'generalCtrl'
		})
		.when('/email_template', {
			templateUrl: 'templates/email_template4.html',
			controller:'generalCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
})
.run(function($rootScope, $location){
	
	/*window.oncontextmenu = function() {
		return false;
	}*/

});