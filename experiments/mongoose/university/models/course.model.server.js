var mongoose = require('mongoose');
var q = require('q');
var courseSchema = require('./course.schema.server');
var courseModel = mongoose.model('ExperimentsMongooseUniversityCourse', courseSchema);
courseModel.createCourse = createCourse;
courseModel.findCourseById = findCourseById;
courseModel.addStudentToCourse = addStudentToCourse;
function addStudentToCourse(studentId, courseId) {
    var deffered = q.defer();
    findCourseById(courseId)
        .then(function (course) {
            course.students.push(studentId);
            course.save(function (err, course) {
                deffered.resolve(course);
            });
        });
    return deffered.promise;
}
function findCourseById(courseId) {
    var deffered = q.defer();
    courseModel
        .findById(courseId, function (err, course) {
            deffered.resolve(course);
        });
    return deffered.promise;
}

function createCourse(course) {
    var deferred = q.defer();
    courseModel
        .create(course, function (err, doc) {
            deferred.resolve(doc)
        });
    return deferred.promise;
}
module.exports = courseModel;