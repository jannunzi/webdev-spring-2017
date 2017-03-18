(function () {
    angular
        .module('wam', ['ngRoute'])
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when('/user', {
                templateUrl: 'templates/users.html',
                controller: 'userController',
                controllerAs: 'model'
            })
            .when('/user/:userId/website', {
                templateUrl: 'templates/websites.html',
                controller: 'websiteController',
                controllerAs: 'model'
            })
            .otherwise({
                redirectTo: '/user'
            });
    }

})();