(function () {
    angular
        .module("WebAppMaker")
        .config(configuration);
    
    function configuration($routeProvider) {
        $routeProvider
            .when("/login",{
                templateUrl: 'user/login.html'
            })
            .when("/register",{
                templateUrl: 'user/register.html'
            })
    }
})();