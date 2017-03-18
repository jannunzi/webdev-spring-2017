(function () {
    angular
        .module('HelloApp')
        .controller('MovieController', MovieController);

    function MovieController($scope, MovieService) {
        MovieService
            .getAllMovies()
            .then(function(movies){
                $scope.movies = movies;
            });
    }
})();