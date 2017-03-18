var mongoose = require('mongoose');
var studentSchema = mongoose.Schema({
    name: String,
    courses: [{type: mongoose.Schema.Types.ObjectId, ref: 'ExperimentsMongooseUniversityCourse'}]
}, {collection: 'experiments.mongoose.university.student'});

module.exports = studentSchema;