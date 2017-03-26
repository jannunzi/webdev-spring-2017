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
            .when('/register', {
                templateUrl: 'templates/register.html',
                controller: 'registerController',
                controllerAs: 'model'
            })
            .when('/profile', {
                templateUrl: 'templates/profile.html',
                controller: 'profileController',
                controllerAs: 'model',
                resolve: {
                    currentUser: checkLogin
                }
            })
            .when('/admin/user', {
                templateUrl: 'templates/admin-user.html',
                controller: 'adminUserController',
                controllerAs: 'model',
                resolve: {
                    adminUser: checkAdmin
                }
            })
            .otherwise({
                redirectTo: '/login'
            });
    }

    function checkAdmin($q, userService, $location) {
        var deferred = $q.defer();
        userService
            .isAdmin()
            .then(function (user) {
                console.log(user);
                if(user != '0' && user.roles.indexOf('ADMIN') > -1) {
                    deferred.resolve(user);
                } else {
                    $location.url('/profile');
                    deferred.reject();
                }
            });
        return deferred.promise;
    }

    function checkLogin($q, userService, $location) {
        var deferred = $q.defer();
        userService
            .loggedIn()
            .then(function (user) {
                console.log(user);
                if(user != '0') {
                    deferred.resolve(user);
                } else {
                    $location.url('/login');
                    deferred.reject();
                }
            });
        return deferred.promise;
    }
})();