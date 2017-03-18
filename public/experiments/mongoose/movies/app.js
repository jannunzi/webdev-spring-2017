(function () {
    angular
        .module('movies', ['ngRoute'])
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when('/actors', {
                templateUrl: 'templates/actors.html',
                controller: 'actorController',
                controllerAs: 'model'
            })
            .when('/movies', {
                templateUrl: 'templates/movies.html',
                controller: 'movieController',
                controllerAs: 'model'
            })
            .otherwise(
                {redirectTo: '/actors'}
            );
    }
})();