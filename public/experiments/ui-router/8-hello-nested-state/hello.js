(function () {
    angular
        .module('HelloApp', ['ui.router'])
        .config(configuration);

    function configuration($stateProvider) {
        var states = [
            {
                name: 'hello',
                url: '/hello',
                templateUrl: 'templates/hello.html',
                controller: 'HelloController'
            },
            {
                name: 'bye',
                url: '/bye',
                templateUrl: 'templates/bye.html',
                controller: 'ByeController'
            },
{
    name: 'movies',
    url: '/movies',
    templateUrl: 'templates/movies.html',
    controller: 'MoviesController'
},
{
    name: 'movies.details',
    url: '/:movieId', // or '/movies/:movieId' or '/movies/{movieId}' or '/{movieId}'
    templateUrl: 'templates/movie.html',
    controller: 'MovieController'
}
        ];

        states.forEach(function (state) {
            $stateProvider.state(state);
        });
    }
})();