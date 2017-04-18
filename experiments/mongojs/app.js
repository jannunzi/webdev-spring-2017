var mongojs = require('mongojs');
var db = mongojs('experiments_mongojs');
var movie = db.collection('movie');
// movie.insert({title: 'The Terminator'});
// movie.insert({title: 'Titanic'});
// movie.insert({title: 'Aliens'});
var app = require('../../express');

movie.find(function(err, movies){
    console.log(movies);
});

movie.findOne({_id: mongojs.ObjectId('58ee193d9197d94caa680f72')}, function (err, movie) {
    console.log(movie);
});

// movie.findAndModify({
//     query: {_id: mongojs.ObjectId('58ee193d9197d94caa680f72')},
//     update: {title: 'Terminator'}
// }, function (err, movie) {
//     console.log(movie);
// });