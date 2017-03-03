define([
    'angular',
    'angularRoute'
], function (ng) {
    ng
        .module('HelloApp', ['ngRoute'])
        .controller('HelloController', helloController);

    function helloController($scope) {
        $scope.hello = 'Hello World';
    }
});