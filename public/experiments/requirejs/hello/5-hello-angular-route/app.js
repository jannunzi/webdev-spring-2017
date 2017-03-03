define([
    'angular',
    'angularRoute'
], function (ng) {
    ng
        .module('HelloApp', ['ngRoute'])
        .controller('HelloController', helloController)
        .controller('Controller1', controller1)
        .controller('Controller2', controller2)
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
    }
    
    function helloController($scope) {
        $scope.hello = 'Hello World';
    }

    function controller1($scope) {
        $scope.hello1 = "Hello 1";
    }

    function controller2($scope) {
        $scope.hello2 = "Hello 2";
    }
});