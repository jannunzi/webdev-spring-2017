(function(){
    angular
        .module("WebAppMaker")
        .config(configuration);

    function configuration($routeProvider, $locationProvider) {
        $routeProvider
            .when("/login", {
                templateUrl: "user/templates/login.view.client.html",
                controller: "LoginController",
                controllerAs: "model"
            })
            .when("/register", {
                templateUrl: "user/templates/register.view.client.html"
            })
            .when("/user/:uid", {
                templateUrl: "user/templates/profile.view.client.html",
                controller: "ProfileController",
                controllerAs: "model"
            })
            .when("/user/:uid/website", {
                templateUrl: "website/templates/website-list.view.client.html",
                controller: "WebsiteListController",
                controllerAs: "model"
            })
            .when("/user/:uid/website/new", {
                templateUrl: "website/templates/website-new.view.client.html"
                // controller: "WebsiteListController",
                // controllerAs: "model"
            })
            .when("/user/:uid/website/:wid", {
                templateUrl: "website/templates/website-edit.view.client.html",
                controller: "WebsiteEditController",
                controllerAs: "model"
            })
            // TODO: complete website routes
            // TODO: create page routes
            // Widget Routes
            .when("/user/:uid/website/:wid/page/:pid/widget", {
                templateUrl: "widget/templates/widget-list.view.client.html",
                controller: "WidgetListController",
                controllerAs: "model"
            })

        // $locationProvider.html5Mode(true);
    }
})();