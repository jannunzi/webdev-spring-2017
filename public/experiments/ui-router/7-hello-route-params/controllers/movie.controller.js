(function () {
    angular
        .module('HelloApp')
        .controller('MovieController', MovieController);

    function MovieController($scope, MovieService, $stateParams) {
        var movieId = $stateParams.movieId;
        console.log(movieId);
        MovieService
            .getMovieById(movieId)
            .then(function(movie){
                $scope.movie = movie;
            });
    }
})();