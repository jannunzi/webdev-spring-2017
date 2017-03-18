(function () {
    angular
        .module('movies')
        .service('movieService', movieService);

    function movieService($http) {
        this.createMovie = createMovie;
        this.findAllMovies = findAllMovies;
        this.deleteMovie = deleteMovie;

        function deleteMovie(movieId) {
            return $http.delete('/api/lectures-wed/mongo/movies/movie/' + movieId)
                .then(function (response) {
                    return response.data;
                });
        }

        function findAllMovies() {
            return $http.get('/api/lectures-wed/mongo/movies/movie')
                .then(function (response) {
                    return response.data;
                });
        }

        function createMovie(movie) {
            return $http.post('/api/lectures-wed/mongo/movies/movie', movie)
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();