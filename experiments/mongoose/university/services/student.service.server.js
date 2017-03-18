module.exports = function (app) {
    console.log('web service!!!');

    var studentModel = require('../models/student.model.server');
    app.get('/api/experiments/mongoose/university/student/:studentId', findStudentDetailsById);

    function findStudentDetailsById(req, res) {
        studentModel.findStudentDetailsById(req.params.studentId)
            .then(function (students) {
                res.json(students);
            });
    }
};
