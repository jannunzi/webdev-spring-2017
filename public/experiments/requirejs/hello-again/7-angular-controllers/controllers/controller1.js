define(['angular'], function (ng) {
    ng.module('HelloApp')
        .controller('Controller1', Controller1)

    function Controller1($scope) {
        $scope.hello1 = 'hello 1';
    }
});