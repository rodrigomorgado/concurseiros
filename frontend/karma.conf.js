// Karma configuration
// Generated on Thu Apr 30 2015 23:17:40 GMT-0300 (Hora oficial do Brasil)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      //initial scripts
      "scripts/angular.min.js",
      "scripts/angular-mocks.js",
      "scripts/jquery-1.11.2.min.js",
      "scripts/bootstrap.min.js",
      "scripts/angular-route.min.js",
      "scripts/ui-bootstrap-tpls-0.12.1.min.js",
      "scripts/angular-toastr.tpls.min.js",
      "scripts/retina-1.1.0.js",
      "scripts/jquery.hoverdir.js",
      "scripts/jquery.hoverex.min.js",
      "scripts/jquery.prettyPhoto.js",
      "scripts/jquery.isotope.min.js",
      "scripts/custom.js",
      "scripts/angular-block-ui.min.js",
      
      //App angular file
      "AppAngular/app.module.js",
      
      //App angular routes
      "AppAngular/app.routes.js",
      
      //App Angular Services
      "AppAngular/InsertScore/insertScore.service.js",
      "AppAngular/Ranking/ranking.service.js",
      "AppAngular/TRT/insertScore/insertScore.service.js",
      
      //App Angular Controllers
      "AppAngular/InsertScore/insertScore.controller.js",
      "AppAngular/Ranking/ranking.controller.js",
      "AppAngular/TRT/insertScore/insertScore.controller.js",
      
      //Tests
      "AppAngular/InsertScore/insertScore.controller.spec.js",
      "AppAngular/InsertScore/insertScore.service.spec.js",
      "AppAngular/Ranking/ranking.controller.spec.js",
      "AppAngular/Ranking/ranking.service.spec.js",
      "AppAngular/TRT/insertScore/insertScore.controller.spec.js",
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['html'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
