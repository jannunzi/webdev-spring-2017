(function () {
    angular
        .module('HelloApp')
        .service('MovieService', MovieService);

    function MovieService($http) {
        this.getAllMovies = getAllMovies;
        this.getMovieById = getMovieById;

function getAllMovies() {
    return $http.get('data/movies.json', { cache: true })
        .then(function (response) {
            return response.data;
        });
}
        
function getMovieById(movieId) {
    return this.getAllMovies()
        .then(function (movies) {
            return movies.find(function (movie) {
                return movie._id == movieId;
            });
        });
}
    }
})();