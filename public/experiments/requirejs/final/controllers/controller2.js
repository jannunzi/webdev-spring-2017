define([], function() {
    function controller2($scope) {
        $scope.hello1 = 'Hello 2 !!!';
    }

    controller2.$inject=['$scope'];

    return controller2;
});