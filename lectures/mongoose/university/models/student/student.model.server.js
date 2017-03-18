var q = require('q');
var mongoose = require('mongoose');
var studentSchema = require('./student.schema.server');
var studentModel = mongoose.model('LecturesMongooseUniversityStudent', studentSchema);

studentModel.createStudent = createStudent;
studentModel.enrollStudentInCourse = enrollStudentInCourse;
module.exports = studentModel;

function enrollStudentInCourse(studentId, courseId) {
    var d = q.defer();
    findStudentById(studentId)
        .then(function (student) {
            student.course = courseId;
            student.save(function (err, data) {
                d.resolve(data);
            });
        });
    return d.promise;
}

function findStudentById(studentId) {
    var d = q.defer();
    studentModel
        .findById(studentId, function (err, student) {
            d.resolve(student);
    });
    return d.promise;
}

function createStudent(student) {
    var deffered = q.defer();
    studentModel
        .create(student, function (err, course) {
            if(err) {
                deffered.abort(err);
            } else {
                deffered.resolve(course);
            }
        });
    return deffered.promise;
}