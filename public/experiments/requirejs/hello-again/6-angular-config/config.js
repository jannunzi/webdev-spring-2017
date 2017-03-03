define(['angular'], function (ng) {
    ng.module('HelloApp')
        .controller('Controller1', Controller1)
        .controller('Controller2', Controller2)
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
            .otherwise({
                redirectTo: 'view1'
            });
    }

    function Controller1($scope) {
        $scope.hello1 = 'hello 1';
    }

    function Controller2($scope) {
        $scope.hello2 = 'hello 2';
    }
});