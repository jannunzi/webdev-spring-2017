var mongoose = require('mongoose');
var studentSchema = mongoose.Schema({
    course: {type: mongoose.Schema.Types.ObjectId, ref:'LecturesMongooseUniverityCourse'},
    username: String
}, {collection: 'lectures.mongoose.university.student'});
module.exports = studentSchema;