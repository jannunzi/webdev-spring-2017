var mongoose = require('mongoose');
var courseSchema = require('./course.schema.server');
var courseModel = mongoose.model('LecturesMongooseUniverityCourse', courseSchema);
var q = require('q');

courseModel.createCourse = createCourse;
courseModel.findAllCourses = findAllCourses;
courseModel.registerStudentInCourse = registerStudentInCourse;
courseModel.findCourseById = findCourseById;
module.exports = courseModel;

function registerStudentInCourse(studentId, courseId) {
    var d = q.defer();

    findCourseById(courseId)
        .then(function (course) {
            course.students.push(studentId);
            course.save(function (err, course) {
                d.resolve(course);
            });
        });

    return d.promise;
}
function findCourseById(courseId) {
    var d = q.defer();
    
    courseModel
        .findById(courseId, function (err, course) {
            if(err) {
                d.abort(err);
            } else {
                d.resolve(course);
            }
        });
    
    return d.promise;
}
function createCourse(course) {
    courseModel
        .create(course);
}
function findAllCourses() {
    var deffered = q.defer();
    courseModel
        .find(function (err, courses) {
            if(err) {
                deffered.abort(err);
            } else {
                deffered.resolve(courses);
            }
        });
    return deffered.promise;
}
