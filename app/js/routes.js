define(['angular', 'app'], function(angular, app) {
	'use strict';

	return app.config(['$routeProvider', function($routeProvider) {
    	$routeProvider.when('/home', {
			templateUrl: 'app/partials/home.html',
			controller: 'MyCtrl1'
		});
        $routeProvider.when('/toy1', {
			templateUrl: 'app/partials/toy1.html',
			controller: 'MyCtrl1'
		});
		$routeProvider.when('/toy2', {
			templateUrl: 'app/partials/toy2.html',
			controller: 'MyCtrl2'
		});
		$routeProvider.otherwise({redirectTo: '/home'});
	}]);

});