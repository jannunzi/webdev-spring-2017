(function () {
    angular
        .module('HelloApp')
        .controller('MoviesController', MoviesController);

    function MoviesController($scope, MovieService) {
        MovieService
            .getAllMovies()
            .then(function(movies){
                $scope.movies = movies;
            });
    }
})();