(function () {
    angular
        .module('movies', ['ngRoute'])
        .config(configuration);
    
    function configuration($routeProvider) {
        $routeProvider
            .when('/actor', {
                templateUrl: 'templates/actor-list.view.client.html',
                controller: 'actorController',
                controllerAs: 'model'
            })
            .when('/movie', {
                templateUrl: 'templates/movie-list.view.client.html',
                controller: 'movieController',
                controllerAs: 'model'
            })
            .otherwise({
                redirectTo: '/actor'
            });
    }
})();