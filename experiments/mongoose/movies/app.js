module.exports = function (app) {
    console.log('movies app');
    var actorService = require('./services/actor.js')(app);
};