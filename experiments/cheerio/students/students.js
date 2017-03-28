var fsc = require('fs-cheerio');
fsc.readFile('students.xml').then(function ($) {
    // displayAllStudents($);

    displayAllCoursesForStudents($);
});

function displayAllCoursesForStudents($) {
    var students = $('Student');
    students.each(function (index, student) {
        var student = $(student);
        var studentName = $(student.find('SName')).text();
        console.log(studentName);
        var courseTitles = student.find('Courses Course Title');
        $(courseTitles).each(function (index, title) {
            console.log($(title).text());
        })
        console.log('-----------');
    });
    // for(var s=0; s<studentNames.length; s++) {
    //     console.log(studentNames[s].children[0].data);
    //     console.log('===========');
    // }
}

function displayAllStudents($) {
    var studentNames = $('Student SName');
    for(var s=0; s<studentNames.length; s++) {
        console.log(studentNames[s].children[0].data);
        console.log('===========');
    }
}