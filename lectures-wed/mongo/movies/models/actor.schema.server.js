module.exports = function () {
    var mongoose = require('mongoose');

    var actorSchema = mongoose.Schema({
        name: String,
        movies: [{type: mongoose.Schema.Types.ObjectId, ref: 'LecturesWedMongoMoviesMovie'}]
    }, {collection: 'lectures-wed.mongo.movies.actor'});

    return actorSchema;
};