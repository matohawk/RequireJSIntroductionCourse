angular.module('requireJSIntroductionCourse').controller('toy1Controller', ['$scope', function($scope) {

    $scope.change = function(){
        
        $scope.displayName = $scope.this.name;
        
    }

}]);