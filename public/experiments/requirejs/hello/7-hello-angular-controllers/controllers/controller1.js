define([
    'angular'
], function (angular) {
    angular
        .module('HelloApp')
        .controller('Controller1', controller1);

    function controller1($scope) {
        $scope.hello1 = "Hello 1";
    }
});