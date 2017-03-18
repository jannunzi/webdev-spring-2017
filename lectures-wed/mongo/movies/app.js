module.exports = function (app) {
    var actorModel = require('./models/actor.model.server')();
    var movieModel = require('./models/movie.model.server')();
    var model = {
        actorModel: actorModel,
        movieModel: movieModel
    };
    require('./services/actor.service.server.js')(app, model);
    require('./services/movie.service.server.js')(app, model);
};