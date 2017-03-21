module.exports = function (app) {
    actorService = require('./services/actor.service.server')(app);
    movieService = require('./services/movie.service.server')(app);
};