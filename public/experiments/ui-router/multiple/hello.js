(function () {
    angular
        .module('HelloApp', ['ui.router'])
        .config(configuration);

    function configuration($stateProvider) {
        var states = [
            {
                name: 'hello',
                views: {
                    hello1 : {
                        url: '/hello',
                        templateUrl: 'templates/hello1.html',
                        controller: 'HelloController'
                    },
                    hello2 : {
                        url: '/hello',
                        templateUrl: 'templates/hello2.html',
                        controller: 'HelloController'
                    },
                    hello3 : {
                        url: '/hello',
                        templateUrl: 'templates/hello3.html',
                        controller: 'HelloController'
                    }
                }
            },
            {
                name: 'bye',
                views: {
                    bye: {
                        templateUrl: 'templates/bye.html',
                        controller: 'ByeController'
                    }
                }
            },
            {
                name: 'movie',
                url: '/movie/:movieId',
                templateUrl: 'templates/movie.html',
                controller: 'MovieController'
            },
            {
                name: 'movies',
                views: {
                    movies : {
                        url: '/movies',
                        templateUrl: 'templates/movies.html',
                        controller: 'MoviesController'
                    },
                    footer : {

                    }
                }
            }
        ];

        states.forEach(function (state) {
            $stateProvider.state(state);
        });
    }
})();