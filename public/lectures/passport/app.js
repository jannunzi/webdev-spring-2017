(function () {
    angular
        .module('passportApp', ['ngRoute'])
        .config(configure);

    function configure($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'views/user/templates/login.view.html',
                controller: 'loginController',
                controllerAs: 'model'
            })
            .when('/register', {
                templateUrl: 'views/user/templates/register.view.html',
                controller: 'registerController',
                controllerAs: 'model'
            })
            .when('/profile', {
                templateUrl: 'views/user/templates/profile.view.html',
                controller: 'profileController',
                controllerAs: 'model',
                resolve: {
                    currentUser: checkLogin
                }
            })
            .when('/admin', {
                templateUrl: 'views/admin/templates/admin.view.html',
                controller: 'adminController',
                controllerAs: 'model',
                resolve: {
                    adminUser: isAdmin
                }
            })
            .otherwise({
                redirectTo: '/login'
            });
    }

    function isAdmin($q, userService, $location) {
        var deffered = $q.defer();
        userService
            .isAdmin()
            .then(function (user) {
                if(user == '0') {
                    deffered.reject();
                    $location.url('/profile')
                } else {
                    deffered.resolve(user);
                }
            });
        return deffered.promise;
    }

    function checkLogin($q, userService, $location) {
        var deffered = $q.defer();
        userService
            .loggedin()
            .then(function (user) {
                if(user == '0') {
                    deffered.reject();
                    $location.url('/login')
                } else {
                    deffered.resolve(user);
                }
            });
        return deffered.promise;
    }
})();