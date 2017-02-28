(function () {
    angular
        .module("MovieApp", [])
        .config(configuration)
        .controller("MovieController", MovieController);

    function configuration($httpProvider) {
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        $httpProvider.defaults.headers.put['Content-Type'] = 'application/json;charset=utf-8';
    }

    function MovieController($http) {
        var vm = this;
        vm.createMovie = createMovie;
        vm.deleteMovie = deleteMovie;
        vm.selectMovie = selectMovie;
        vm.updateMovie = updateMovie;

        function init() {
            findAllMovies();
        }
        init();

        function updateMovie(movie) {
            $http
                .put('/api/lectures/movie/' + movie._id, movie)
                .success(findAllMovies);
        }

        function selectMovie(movieId) {
            $http
                .get('/api/lectures/movie/' + movieId)
                .success(renderMovie);
        }

        function renderMovie(movie) {
            vm.movie = movie;
        }

        function deleteMovie(movieId) {
            $http
                .delete('/api/lectures/movie/' + movieId)
                .success(findAllMovies);
        }

        function findAllMovies() {
            $http
                .get('/api/lectures/movie')
                .success(renderMovies);
        }
        
        function createMovie(movie) {
            $http
                .post('/api/lectures/movie', movie)
                .success(findAllMovies);
        }

        function renderMovies(movies) {
            vm.movies = movies;
        }
    }
})();