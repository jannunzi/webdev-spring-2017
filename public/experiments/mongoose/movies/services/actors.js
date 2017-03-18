(function () {
    angular
        .module('movies')
        .service('actorService', actorService);

    function actorService($http) {
        this.createActor = createActor;
        this.findAllActors = findAllActors;
        
        function findAllActors() {
            return $http.get('/api/experiments/mongoose/movies/actor')
                .then(function (response) {
                    return response.data;
                });
        }

        function createActor(actor) {
            return $http.post('/api/experiments/mongoose/movies/actor', actor)
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();