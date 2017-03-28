var fsc = require('fs-cheerio');
fsc.readFile('enrollments.xml').then(function ($) {
    // displayAllCourses($);

    // displayCoursesForStudent($,'ian');
    // displayCoursesForStudent($,'ben');
    // displayCoursesForStudent($,'tom');

    displayStudentsInCourse($, 'calculus');
    displayStudentsInCourse($, 'shakespeare');
    displayStudentsInCourse($, 'databases');
    displayStudentsInCourse($, 'popculture');
});

function displayStudentsInCourse($, course) {
    var courses = $('CourseTaken[title='+course+']');
    console.log(course);
    console.log('======');
    for(var c=0; c<courses.length; c++) {
        console.log(courses[c].attribs['sname']);
    }
    console.log('');
}

function displayCoursesForStudent($, sname) {
    var courses = $('CourseTaken[sname='+sname+']');
    console.log(sname);
    for(var c=0; c<courses.length; c++) {
        console.log(courses[c].attribs['title']);
    }
}

function displayAllCourses($) {
    var allCoursesTaken = $("CourseTaken");
    console.log(allCoursesTaken.length);
    for(var c=0; c<allCoursesTaken.length; c++) {
        var courseTaken = allCoursesTaken[c];
        var sname = courseTaken.attribs['sname'];
        var gradyear = courseTaken.attribs['gradyear'];
        var title = courseTaken.attribs['title'];
        var yeartaken = courseTaken.attribs['yeartaken'];
        var grade = courseTaken.attribs['grade'];
        console.log([sname, title]);
    }
}