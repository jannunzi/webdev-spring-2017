(function () {
    angular
        .module('movies')
        .controller('actorController', actorController);

    function actorController(actorService) {
        var model = this;
        model.createActor = createActor;

        function init() {

        }
        init();

        function createActor(actor) {
            actorService
                .createActor(actor)
                .then(findAllUsers);
        }
        
        function findAllUsers() {
            actorService
                .findAllActors()
                .then(renderAllActors);
        }

        function renderAllActors(actors) {
            model.actors = actors;
        }
    }
})();