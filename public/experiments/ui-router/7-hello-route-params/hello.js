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
                name: 'movie',
                url: '/movie/:movieId', // or '/movie/{movieId}'
                templateUrl: 'templates/movie.html',
                controller: 'MovieController'
            },
            {
                name: 'movies',
                url: '/movies',
                templateUrl: 'templates/movies.html',
                controller: 'MoviesController'
            }
        ];

        states.forEach(function (state) {
            $stateProvider.state(state);
        });
    }
})();