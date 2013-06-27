angular.module('requireJSIntroductionCourse').controller('toy2Controller', ['$scope', function($scope) {

    $scope.changeConversionMeter = function(){
        
        $scope.inch = $scope.this.meter / 39.370078740157;     
        
    };
    
    $scope.changeConversionInch = function(){    
    
        $scope.meter = $scope.this.inch * 39.370078740157;
    
    };

}]);