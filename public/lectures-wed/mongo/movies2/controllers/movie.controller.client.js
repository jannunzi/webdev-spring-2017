(function () {
    angular
        .module('movies')
        .controller('movieController', movieController);
    
    function movieController(movieService) {
        var model = this;
        model.createMovie = createMovie;
        model.deleteMovie = deleteMovie;

        function init() {
            findAllMovies();
        }
        init();

        function deleteMovie(movieId) {
            movieService
                .deleteMovie(movieId)
                .then(findAllMovies);
        }
        function findAllMovies() {
            movieService
                .findAllMovies()
                .then(renderMovies);
        }

        function renderMovies(movies) {
            model.movies = movies;
        }
        
        function createMovie(movie) {
            movieService
                .createMovie(movie)
                .then(findAllMovies);
        }
    }
})();