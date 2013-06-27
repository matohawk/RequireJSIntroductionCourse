angular.module('requireJSIntroductionCourse').config(['$routeProvider', function($routeProvider){

    $routeProvider
        .when('/home',
        {
            templateUrl:    '../views/home.html'
        })
        .when('/toy1',
        {
            templateUrl:    '../views/Toy1.html',
            controller:     'toy1Controller'
        })
        .when('/toy2',
        {
            templateUrl:    '../views/Toy2.html',
            controller:     'toy2Controller'
        })
        .otherwise({redirectTo: '/home'});

}]);