define([
    './app',
    'angularRoute'
], function (app) {
    'use strict';
    var config = app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'partials/partial1.html',
            controller: 'MyCtrl1'
        });

        $routeProvider.when('/view2', {
            templateUrl: 'partials/partial2.html',
            controller: 'MyCtrl2'
        });

        $routeProvider.otherwise({
            redirectTo: '/view1'
        });
    }]);

    return config;
});