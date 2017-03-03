define(['angular'], function (ng) {
    ng.module('HelloApp')
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when('/view1', {
                templateUrl: 'templates/view1.html',
                controller: 'Controller1'
            })
            .when('/view2', {
                templateUrl: 'templates/view2.html',
                controller: 'Controller2'
            })
            .otherwise({
                redirectTo: 'view1'
            });
    }
});