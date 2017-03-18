var mongoose = require('mongoose');
var q = require('q');
var studentSchema = require('./student.schema.server');
var studentModel = mongoose.model('ExperimentsMongooseUniversityStudentModel', studentSchema);

function addCourseToStudent(courseId, studentId) {
    var deffered = q.defer();
    findStudentById(studentId)
        .then(function (student) {
            student.courses.push(courseId);
            student.save(function (err, student) {
                deffered.resolve(student);
            });
        });
    return deffered.promise;
}
function findStudentById(studentId) {
    var deffered = q.defer();
    studentModel
        .findById(studentId, function (err, student) {
            deffered.resolve(student);
        });
    return deffered.promise;
}
function findStudentDetailsById(studentId) {
    var deffered = q.defer();
    studentModel
        .findById(studentId)
        .populate('courses', 'name -_id')
        .exec(function (err, student) {
            deffered.resolve(student);
        });
    return deffered.promise;
}
function createStudent(student) {
    var deffered = q.defer();
    studentModel
        .create(student, function (err, student) {
            deffered.resolve(student);
        });
    return deffered.promise;
}

studentModel.createStudent = createStudent;
studentModel.findStudentById = findStudentById;
studentModel.addCourseToStudent = addCourseToStudent;
studentModel.findStudentDetailsById = findStudentDetailsById;

module.exports = studentModel;