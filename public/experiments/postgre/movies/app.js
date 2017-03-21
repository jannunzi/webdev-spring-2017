angular
    .module('movies', [])
    .controller('moviesController', moviesController)
    .service('actorService', actorService)
    .service('movieService', movieService)

function moviesController(actorService, movieService) {
    var model = this;

    model.createActor = createActor;
    model.deleteActor = deleteActor;
    model.selectActor = selectActor;
    model.updateActor = updateActor;

    model.createMovie = createMovie;
    model.deleteMovie = deleteMovie;
    model.selectMovie = selectMovie;
    model.updateMovie = updateMovie;

    function init() {
        findAllActors();
        findAllMovies();
    }
    init();

    function updateMovie(movieId, movie) {
        movieService
            .updateMovie(movieId, movie)
            .then(findAllMovies);
    }

    function selectMovie(movie) {
        model.movie = angular.copy(movie);
    }

    function deleteMovie(movieId) {
        movieService
            .deleteMovie(movieId)
            .then(findAllMovies);
    }

    function createMovie(movie) {
        movieService
            .createMovie(movie)
            .then(findAllMovies);
    }
    
    function findAllMovies() {
        model.movie = null;
        movieService
            .findAllMovies()
            .then(renderAllMovies);
    }
    
    function renderAllMovies(movies) {
        model.movies = movies;
    }
    
    function updateActor(actorId, actor) {
        actorService
            .updateActor(actorId, actor)
            .then(findAllActors);
    }

    function selectActor(actor) {
        model.actor = angular.copy(actor);
    }

    function deleteActor(actorId) {
        actorService
            .deleteActor(actorId)
            .then(findAllActors);
    }

    function createActor(actor) {
        actorService
            .createActor(actor)
            .then(findAllActors);
    }

    function findAllActors() {
        model.actor = null;
        actorService
            .findAllActors()
            .then(renderAllActors);
    }

    function renderAllActors(actors) {
        model.actors = actors;
    }
}

function actorService($http) {
    this.createActor = createActor;
    this.findAllActors = findAllActors;
    this.findActorById = findActorById;
    this.updateActor = updateActor;
    this.deleteActor = deleteActor;

    function createActor(actor) {
        return $http.post('/api/experiments/postgre/movies/actor', actor)
            .then(function (response) {
                return response.data;
            });
    }
    
    function findAllActors() {
        return $http.get('/api/experiments/postgre/movies/actor')
            .then(function (response) {
                return response.data;
            });
    }

    function findActorById(actorId) {
        return $http.get('/api/experiments/postgre/movies/actor/'+actorId)
            .then(function (response) {
                return response.data;
            });
    }

    function updateActor(actorId, actor) {
        return $http.put('/api/experiments/postgre/movies/actor/'+actorId, actor)
            .then(function (response) {
                return response.data;
            });
    }

    function deleteActor(actorId) {
        return $http.delete('/api/experiments/postgre/movies/actor/'+actorId)
            .then(function (response) {
                return response.data;
            });
    }
}

function movieService($http) {
    this.createMovie = createMovie;
    this.findAllMovies = findAllMovies;
    this.findMovieById = findMovieById;
    this.updateMovie = updateMovie;
    this.deleteMovie = deleteMovie;

    function createMovie(movie) {
        return $http.post('/api/experiments/postgre/movies/movie', movie)
            .then(function (response) {
                return response.data;
            });
    }

    function findAllMovies() {
        return $http.get('/api/experiments/postgre/movies/movie')
            .then(function (response) {
                return response.data;
            });
    }

    function findMovieById(movieId) {
        return $http.get('/api/experiments/postgre/movies/movie/'+movieId)
            .then(function (response) {
                return response.data;
            });
    }

    function updateMovie(movieId, movie) {
        return $http.put('/api/experiments/postgre/movies/movie/'+movieId, movie)
            .then(function (response) {
                return response.data;
            });
    }

    function deleteMovie(movieId) {
        return $http.delete('/api/experiments/postgre/movies/movie/'+movieId)
            .then(function (response) {
                return response.data;
            });
    }
}