(function () {
    angular
        .module('OmdbApp')
        .controller('DetailsController', DetailsController);

    function DetailsController($stateParams, MovieService) {
        var model = this;

        function init() {
            model.imdbID = $stateParams.imdbID;
            MovieService
                .searchMovieByImdbID(model.imdbID)
                .then(function (movie) {
                    model.movie = movie;
                });
        }
        init();
        }
})();