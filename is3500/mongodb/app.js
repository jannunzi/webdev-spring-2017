var mongoose = require('mongoose');
var connectionString = 'mongodb://localhost/is3500_spring_2017';
mongoose.connect(connectionString);

var movieSchema = mongoose.Schema({
    title: String
}, {collection: 'movie'});

var actorSchema = mongoose.Schema({
    name: {type: String, required: true}
}, {collection: 'actor'});

var movieModel = mongoose.model('MovieModel', movieSchema);
var actorModel = mongoose.model('ActorModel', actorSchema);

// findMovieById('58d944f10eadb065b3f7b23f');
// createActor({name: "Harrison Ford"});

function createActor(actor) {
    actorModel.create(actor, function (err, actor) {
        console.log(actor);
    });
}

function findMovieById(movieId) {
    movieModel.findById(movieId, function (err, movie) {
        console.log(movie);
    });
}

function findAllMovies() {
    movieModel.find(function (err, movies) {
        console.log(movies);
    });
}

function findAllActors() {
    actorModel.find(function (err, actors) {
        console.log(actors);
    });
}
