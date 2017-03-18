var q = require('q');
var mongoose = require('mongoose');
var registrationSchema = require('./registration.schema.server');
var registrationModel = mongoose.model('LectureMongooseUniversityRegistration', registrationSchema);

// api
registrationModel.registerStudentInCourse = registerStudentInCourse;
registrationModel.findAllRegistrations = findAllRegistrations;
module.exports = registrationModel;

function findAllRegistrations() {
    var d = q.defer();

    registrationModel
        .find()
        .populate('student', 'username -_id')
        .populate('course', 'name -_id')
        .exec(function (err, registrations) {
            d.resolve(registrations);
        });
    
    return d.promise;
}

function registerStudentInCourse(studentId, courseId) {
    var d = q.defer();
    var registration = {
        student: studentId,
        course: courseId
    };
    registrationModel.create(registration, function (err, doc) {
        d.resolve(doc);
    });
    return q.promise;
}