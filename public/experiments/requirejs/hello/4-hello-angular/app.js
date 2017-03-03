define([
    'angular'
], function (ng) {
    ng
        .module('HelloApp', [])
        .controller('HelloController', helloController);

    function helloController($scope) {
        $scope.hello = 'Hello World';
    }
});