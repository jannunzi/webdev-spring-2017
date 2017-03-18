(function () {
    angular
        .module('movies')
        .controller('actorController', actorController);
    
    function actorController(actorService, movieService) {
        var model = this;
        model.createActor = createActor;
        model.deleteActor = deleteActor;
        model.addSelectedMovieToSelectedActor = addSelectedMovieToSelectedActor;
        model.deleteMovieFromActor = deleteMovieFromActor;

        function init() {
            findAllActors();
            findAllMovies();
        }
        init();

        function deleteMovieFromActor(actorId, movieId) {
            actorService
                .deleteMovie(actorId, movieId)
                .then(findAllActors);
        }

        function addSelectedMovieToSelectedActor(movieId, actorId) {
            actorService
                .addMovie(actorId, movieId)
                .then(findAllActors);
            // console.log([movieId, actorId]);
        }

        function findAllMovies() {
            movieService
                .findAllMovies()
                .then(renderMovies);
        }

        function renderMovies(movies) {
            model.movies = movies;
        }

        function deleteActor(actorId) {
            actorService
                .deleteActor(actorId)
                .then(findAllActors);
        }
        function findAllActors() {
            actorService
                .findAllActors()
                .then(renderActors);
        }

        function renderActors(actors) {
            model.actors = actors;
        }
        
        function createActor(actor) {
            actorService
                .createActor(actor)
                .then(findAllActors);
        }
    }
})();