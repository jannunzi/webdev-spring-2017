var q = require('q');
studentModel = require('./student.model.server');
courseModel = require('./course.model.server');
function registerStudentInCourse2(studentId, courseId) {
    var deffered = q.defer();
    courseModel
        .addStudentToCourse(studentId, courseId)
        .then(function () {
            return studentModel.addCourseToStudent(courseId, studentId);
        })
        .then(function () {
            deffered.resolve();
        });
    return deffered.promise;
}
function registerStudentInCourse(studentId, courseId) {
    var deferred = q.defer();
    courseModel
        .findById(courseId, function (err, course) {
            // find course and add student to course
            var d2 = q.defer();
            course.students.push(studentId);
            course.save(function (err, course) {
                d2.resolve(course);
            });
            return d2.promise;
        })
        .then(function (course) {
            // find student
            var d3 = q.defer();
            studentModel
                .findById(studentId, function (err, student) {
                    d3.resolve(student);
                });
            return d3.promise;
        })
        .then(function (student) {
            // add course to student
            var d4 = q.defer();
            student.courses.push(courseId);
            student.save(function (err, student) {
                d4.resolve(student);
            });
            return d4.promise;
        })
        .then(function (student) {
            // done
            deferred.resolve(student);
        });
    return deferred.promise;
}

module.exports = {
    registerStudentInCourse: registerStudentInCourse,
    registerStudentInCourse2: registerStudentInCourse2
};