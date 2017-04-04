// var university = require('./university');
//
// university
//     .getAllColleges()
//     .then(function (colleges) {
//         for(var c=0; c<colleges.length; c++) {
//             console.log(colleges[c].attribs['name']);
//         }
//     });

var um = require('./univ_mod');
var q = require('q');

// um.then(function ($) {
//     console.log($);
// });
//
module.exports = {
    getUniversity: getUniversity,
    getColleges: getColleges
};

function getUniversity() {
    var defer = q.defer();
    um.then(function ($) {
        defer.resolve($);
    });
    return defer.promise;
}

function getColleges() {
    var defer = q.defer();
    um.then(function ($) {
        defer.resolve($('college'));
    });
    return defer.promise;
}

function addCollege(name) {
    var college = $('<college>')
    college.attr('name', name);
    getUniversity()
}