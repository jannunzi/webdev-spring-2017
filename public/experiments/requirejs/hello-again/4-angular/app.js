define(['angular'], function (ng) {
    var app = ng.module('HelloApp', [])
        .controller('HelloController', helloController);

    return app;

    function helloController($scope) {
        $scope.hello = 'hello world';
    }
});