module.exports = function (app) {
    app.post('/api/actor/:actorId/movie/:movieId/role/:role', castActorForMovie);
    app.post('/api/movie/:movieId/actor/:actorId/role/:role', castActorForMovie);

    var castModel = require('../models/casting.model.server');

    function castActorForMovie(req, res) {
        var role = req.params.role;
        var actorId = req.params.actorId;
        var movieId = req.params.movieId;
        castModel
            .castActorForMovie(actorId, movieId, role)
            .then(function (role) {
                res.json(role);
            });
    }

};