(function () {
    require
        .config({
            paths: {
                'jquery' : '../../../../js/vendor/jquery-3.1.1.min',         // refer to jquery
                // 'bootstrap' : '../../../../js/bootstrap',   // refer to bootstrap
                'angular': '../../../../js/angular',         // refer to angular
                'angular-route': '../../../../js/angular-route'//,
                // 'HomeController': 'views/home/home.controller',
                // 'app': 'app'
            },
            shim: {
                'jquery' : {exports: 'jquery'},             // export jquery
                // 'bootstrap' : {deps: ['jquery']},           // bootstrap depends on jquery
                'angular': {exports: 'angular'},             //
                'angular-route': {deps: ['angular']},
                // 'HomeController': {deps: ['app']}
            }
        });

    require([
        'app',
        'config'
    ],
        function() {
            // console.log(angular);
            angular.bootstrap(document, ['RequireSampleApp']);

            // angular
            //     .module('RequireSampleApp')
            //     .config(Config);
            //
            // function Config($routeProvider) {
            //     $routeProvider
            //         .when('/', {
            //             templateUrl: 'scripts/views/home/home.html',
            //             controller: 'HomeController'
            //         })
            // }
        }
    );
})();