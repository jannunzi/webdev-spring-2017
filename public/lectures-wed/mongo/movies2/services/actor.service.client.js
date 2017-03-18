(function () {
    angular
        .module('movies')
        .service('actorService', actorService);

    function actorService($http) {
        this.createActor = createActor;
        this.findAllActors = findAllActors;
        this.deleteActor = deleteActor;
        this.addMovie = addMovie;
        this.deleteMovie = deleteMovie;

        function deleteMovie(actorId, movieId) {
            return $http.delete('/api/lectures-wed/mongo/movies/actor/' + actorId + '/movie/' + movieId)
                .then(function (response) {
                    return response.data;
                });
        }

        function addMovie(actorId, movieId) {
            return $http.put('/api/lectures-wed/mongo/movies/actor/' + actorId + '/movie/' + movieId)
                .then(function (response) {
                    return response.data;
                });
        }

        function deleteActor(actorId) {
            return $http.delete('/api/lectures-wed/mongo/movies/actor/' + actorId)
                .then(function (response) {
                    return response.data;
                });
        }

        function findAllActors() {
            return $http.get('/api/lectures-wed/mongo/movies/actor')
                .then(function (response) {
                    return response.data;
                });
        }

        function createActor(actor) {
            return $http.post('/api/lectures-wed/mongo/movies/actor', actor)
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();