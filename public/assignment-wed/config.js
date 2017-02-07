(function(){
    angular
        .module("WebAppMaker")
        .config(configuration);

    function configuration($routeProvider, $locationProvider) {
        $routeProvider
            .when("/login", {
                templateUrl: "user/login.view.client.html",
                controller: "LoginController",
                controllerAs: "model"
            })
            .when("/register", {
                templateUrl: "user/register.view.client.html"
            })
            .when("/user/:uid", {
                templateUrl: "user/profile.view.client.html"
            })
            .when("/websites", {
                templateUrl: "website/website-list.view.client.html"
            });

        // $locationProvider.html5Mode(true);
    }
})();