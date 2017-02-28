module.exports = function () {
    console.log('mongoose');
    var mongoose = require('mongoose');

    var StudentSchema = mongoose.Schema({
        first: String,
        last: String
    });

    var StudentModel = mongoose.model('StudentModel', StudentSchema);

    // StudentModel.create({first: 'john', last: 'doe'});
    // StudentModel.create({first: 'alice', last: 'wonderland'});
    StudentModel
        .update(
            {first: 'john'},
            {first: 'Johny'})
        .then(function(){
            return StudentModel
                .remove({_id: '58b50b6014f8931a309a4473'});
        })
        .then(function () {
            StudentModel
                .find()
                .then(function(students){
                    console.log(students);
                });
        });
};