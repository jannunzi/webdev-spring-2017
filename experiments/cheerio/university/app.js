// var university = require('./university');
//
// university
//     .getAllColleges()
//     .then(function (colleges) {
//         for(var c=0; c<colleges.length; c++) {
//             console.log(colleges[c].attribs['name']);
//         }
//     });

// var um = require('./univ_mod');
// um.then(function ($) {
//     console.log($);
// });

var model = require('./model');

// model
//     .getUniversity()
//     .then(function(university){
//         console.log(university);
//     });

model
    .getColleges()
    .then(function (colleges) {
        // console.log(colleges);
        for(var c=0; c<colleges.length; c++) {
            console.log(colleges[c].attribs['name']);
        }
    });
