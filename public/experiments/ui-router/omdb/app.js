(function () {
    angular
        .module('OmdbApp', ['ui.router'])
        .config(configuration);
    
    function configuration($stateProvider, $urlRouterProvider) {

        var states = [
            {
                name: 'search',
                url:  '/search',
                templateUrl: 'templates/search.html',
                controller: 'SearchController',
                controllerAs: 'model'
            }
            ,{
                name: 'search.results',
                url: '/:title',
                templateUrl: 'templates/results.html',
                controller: 'ResultsController',
                controllerAs: 'model'
            }
            ,{
                name: 'search.results.details',
                url: '/:imdbID',
                templateUrl: 'templates/details.html',
                controller: 'DetailsController',
                controllerAs: 'model'
            }
        ];

        states.forEach(function (state) {
            $stateProvider.state(state);
        });

        $urlRouterProvider.when('', '/search');
    }
})();