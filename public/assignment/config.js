(function () {
    angular
        .module("WebAppMaker")
        .config(configuration);
    
    function configuration($routeProvider) {
        $routeProvider
            .when("/login",{
                templateUrl: 'views/user/templates/login.view.client.html',
                controller: 'loginController',
                controllerAs: 'model'
            })
            .when("/register",{
                templateUrl: 'views/user/templates/register.view.client.html'
            })
            .when("/profile/:uid",{
                templateUrl: 'views/user/templates/profile.view.client.html',
                controller: 'profileController',
                controllerAs: 'model'
            })
            .when("/user/:uid/website",{
                templateUrl: 'views/website/templates/website-list.view.client.html',
                controller: "WebsiteListController",
                controllerAs: "model"
            })
            .when("/user/:uid/website/new",{
                templateUrl: 'views/website/templates/website-new.view.client.html',
                controller: "WebsiteNewController",
                controllerAs: "model"
            })
            .when("/user/:uid/website/:wid",{
                templateUrl: 'views/website/templates/website-edit.view.client.html',
                controller: "WebsiteEditController",
                controllerAs: "model"
            })
        // now do all the page routes using websites as an example
            .when("/user/:uid/website/:wid/page/:pid/widget",{
                templateUrl: 'views/widget/templates/widget-list.view.client.html',
                controller: "WidgetListController",
                controllerAs: "model"
            });

    }
})();