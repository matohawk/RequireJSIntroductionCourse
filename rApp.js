require.config({
    paths: {

        /* Components */
        angular: 'components/angularjs/angular',
        
        requireJSIntroductionCourse: "js/app",
    },
    shim: {
        
        'requireJSIntroductionCourse': {
            deps: ['angular']
        },
        
        'js/configRoutes': {
            deps: ['angular', 'requireJSIntroductionCourse']
        },
        
        'js/toy1Controller': {
            deps: ['angular', 'requireJSIntroductionCourse']
        },
        
        'js/toy2Controller': {
            deps: ['angular', 'requireJSIntroductionCourse']
        }
        
    }
});

require(['angular', 'requireJSIntroductionCourse', 'js/configRoutes', 'js/toy1Controller', 'js/toy2Controller'],

    function(){

        angular.bootstrap(document, ['requireJSIntroductionCourse']);

    }

);