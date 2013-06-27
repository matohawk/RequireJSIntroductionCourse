define(['angular'], function (angular) {
	'use strict';

	return angular.module('myApp.controllers', [])
		// Sample controller where service is being used
		.controller('MyCtrl1', ['$scope', function ($scope) {
            
            $scope.change = function(){
            
                $scope.displayName = $scope.this.name;
            
            }

		}])
		// More involved example where controller is required from an external file
		.controller('MyCtrl2', ['$scope', function($scope) {

            $scope.changeConversionMeter = function(){
                
                $scope.inch = $scope.this.meter / 39.370078740157;     
                
            };
            
            $scope.changeConversionInch = function(){    
            
                $scope.meter = $scope.this.inch * 39.370078740157;
            
            };

		}]);
});