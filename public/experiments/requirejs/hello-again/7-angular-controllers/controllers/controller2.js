define(['angular'], function (ng) {
    ng.module('HelloApp')
        .controller('Controller2', Controller2)

    function Controller2($scope) {
        $scope.hello2 = 'hello 2';
    }
});