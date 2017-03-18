module.exports = function () {
    var mongoose = require('mongoose');

    var movieSchema = mongoose.Schema({
        name: String,
        actors: [{type: mongoose.Schema.Types.ObjectId, ref: 'LecturesWedMongoMoviesActor'}]
    }, {collection: 'lectures-wed.mongo.movies.movie'});

    return movieSchema;
};