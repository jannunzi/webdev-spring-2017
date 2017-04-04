(function () {
    angular
        .module('passportApp', ['ngRoute'])
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'templates/login.view.html',
                controller: 'LoginController',
                controllerAs: 'model'
            })
            .when('/admin', {
                templateUrl: 'templates/admin.view.html',
                resolve: {
                    adminUser: checkAdmin
                },
                controller: 'adminController',
                controllerAs: 'model'
            })
            .when('/register', {
                templateUrl: 'templates/register.view.html',
                controller: 'RegisterController',
                controllerAs: 'model'
            })
            .when('/profile', {
                templateUrl: 'templates/profile.view.html',
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
        var defer = $q.defer();
        userService
            .loggedin()
            .then(function (user) {
                if(user != '0') {
                    defer.resolve(user);
                } else {
                    defer.reject();
                    $location.url('/login');
                }
            });
        return defer.promise;
    }

    function checkAdmin($q, userService, $location) {
        var defer = $q.defer();
        userService
            .isAdmin()
            .then(function (user) {
                if(user != '0') {
                    defer.resolve(user);
                } else {
                    defer.reject();
                    $location.url('/profile');
                }
            });
        return defer.promise;
    }
})();