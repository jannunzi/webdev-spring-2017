define([],function(){
    function config($routeProvider) {
        $routeProvider
            .when('/view1',
            {
                    templateUrl: 'templates/view1.html',
                    controller: 'controller1'
            })
            .when('/view2',
            {
                    templateUrl:'templates/view2.html',
                    controller:'controller2'
            })
            .otherwise({redirectTo: '/view1'});
    }
    config.$inject=['$routeProvider'];

    return config;
});