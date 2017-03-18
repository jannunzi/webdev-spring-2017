module.exports = function (app) {

    require("./services/student.service.server")(app);
    var studentModel = require('./models/student.model.server');
    var courseModel = require('./models/course.model.server');
    // studentModel.createStudent({name: 'Joe'});
    // courseModel.createCourse({name: 'IS3500'});
    var student2course = require('./models/student2course.model.server');
    //student2course.registerStudentInCourse('58cb58f1c739fd13c52834b6', '58cb581a08124c12ab65fdab');
    // student2course.registerStudentInCourse2('58cb58f1c739fd13c52834b6', '58cb587ae4ff1213292a8d19');
    studentModel
        .findStudentById('58cb58f1c739fd13c52834b6')
        .then(function (student) {
            console.log(student);
        });
    studentModel
        .findStudentDetailsById('58cb58f1c739fd13c52834b6')
        .then(function (student) {
            console.log(student);
        });

}