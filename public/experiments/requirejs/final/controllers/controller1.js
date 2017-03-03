define([], function() {
    function controller1($scope) {
        $scope.hello1 = 'Hello 1 !!!';
    }

    controller1.$inject=['$scope'];

    return controller1;
});