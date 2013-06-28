module.exports = function(grunt) {
    grunt.initConfig({
        requirejs: {
	        dev:{
                options: {
    	            baseUrl: './',
    	            out: 'build/main.js',
    	            optimize: 'none',
    	            mainConfigFile: 'rApp.js',
    	            name: 'rApp',
    	            generateSourceMaps: true,
    	            preserveLicenseComments: false,
    	            fileExclusionRegExp: /^(r|build)\.js$/,
    	            onBuildWrite: function(moduleName, path, contents) {
    	                var modulesToExclude, shouldExcludeModule;
    
    	                modulesToExclude = ['rApp'];
    	                shouldExcludeModule = modulesToExclude.indexOf(moduleName) >= 0;
    	                if (shouldExcludeModule) {
    	                    return '';
    	                }
    	                return contents;
    	            },
    	            wrap: false,
    	            skipModuleInsertion: true,
    	            useStrict: true,
    	            logLevel: 0
    	        }
	        },
            prod:{
                options: {
    	            baseUrl: './',
    	            out: 'build/main.js',
    	            optimize: 'uglify2',
    	            mainConfigFile: 'rApp.js',
    	            name: 'rApp',
    	            generateSourceMaps: true,
    	            preserveLicenseComments: false,
    	            fileExclusionRegExp: /^(r|build)\.js$/,
    	            onBuildWrite: function(moduleName, path, contents) {
    	                var modulesToExclude, shouldExcludeModule;
    
    	                modulesToExclude = ['rApp'];
    	                shouldExcludeModule = modulesToExclude.indexOf(moduleName) >= 0;
    	                if (shouldExcludeModule) {
    	                    return '';
    	                }
    	                return contents;
    	            },
    	            wrap: false,
    	            skipModuleInsertion: true,
    	            useStrict: true,
    	            logLevel: 0
    	        }
	        }            

        }

    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', ['requirejs:dev']);
    grunt.registerTask('prod', ['requirejs:prod']);

};
