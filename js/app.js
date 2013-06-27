angular.module('requireJSIntroductionCourse', []);

angular.module('requireJSIntroductionCourse').controller('mainController', ['$scope', '$location', function($scope, $location) {

    $scope.isActive = function(route) {

        return route === $location.path();
    }

}]);;