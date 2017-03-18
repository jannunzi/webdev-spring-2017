var mongoose = require('mongoose');
var courseSchema = mongoose.Schema({
    name: String,
    students: [{type: mongoose.Schema.Types.ObjectId, ref: 'LecturesMongooseUniversityStudent'}]
}, {collection: 'lectures.mongoose.university.course'});

module.exports = courseSchema;