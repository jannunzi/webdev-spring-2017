var courseModel = require('./models/course/course.model.server');
var studentModel = require('./models/student/student.model.server');
var registrationModel = require('./models/registration/registration.model.server');

registrationModel.findAllRegistrations()
    .then(function(registrations){
        console.log(registrations);
    });

// registrationModel.registerStudentInCourse('58cbf3f3f78d13437de73331','58cbedca1382753b83c99644');
// registrationModel.registerStudentInCourse('58cbf406cde858439ab0dfb5','58cbedca1382753b83c99644');
// courseModel.registerStudentInCourse('58cbf3f3f78d13437de73331','58cbedca1382753b83c99644');
// courseModel.registerStudentInCourse('58cbf406cde858439ab0dfb5','58cbedca1382753b83c99644');

// studentModel
//     .enrollStudentInCourse('58cbf406cde858439ab0dfb5', '58cbedca1382753b83c99644')
//     .then(function (data) {
//         console.log(data);
//     });

// studentModel
//     .createStudent({username: 'charlie'})
//     .then(function (student) {
//         console.log(student);
//     });

// courseModel.createCourse({name: 'CS5610'});
// courseModel
//     .findAllCourses()
//     .then(function(courses){
//         console.log(courses);
//     }, function (err) {
//         console.log(err);
//     });