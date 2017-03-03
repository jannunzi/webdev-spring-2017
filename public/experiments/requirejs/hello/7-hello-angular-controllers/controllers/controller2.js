define([
    'angular'
], function (angular) {
    angular
        .module('HelloApp')
        .controller('Controller2', controller2);

    function controller2($scope) {
        $scope.hello2 = "Hello 2";
    }
});