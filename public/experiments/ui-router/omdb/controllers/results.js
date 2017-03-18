(function () {
    angular
        .module('OmdbApp')
        .controller('ResultsController', ResultsController);

    function ResultsController($stateParams, MovieService) {
        var model = this;

        function init() {
            model.title = $stateParams.title;
            MovieService
                .searchMovieByTitle(model.title)
                .then(function (results) {
                    model.results = results;
                });
        }
        init();
        }
})();