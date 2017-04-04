(function () {
    angular
        .module('passportApp', ['ngRoute'])
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'templates/login.html',
                controller: 'loginController',
                controllerAs: 'model'
            })
            .when('/profile', {
                templateUrl: 'templates/profile.html',
                controller: 'profileController',
                controllerAs: 'model',
                resolve: {
                    currentUser: checkLoggedIn
                }
            })
            .otherwise({
                redirectTo: '/login'
            })
    }

    function checkLoggedIn($q, userService, $location) {
        var deferred = $q.defer();

        userService
            .checkLoggedIn()
            .then(function (user) {
                if(user == '0') {
                    $location.url('/login');
                    deferred.reject();
                } else {
                    deferred.resolve(user);
                }
            });

        return deferred.promise;
    }
})();