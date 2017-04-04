var fc = require('fs-cheerio');
var q = require('q');

var api = {
    getAllColleges: getAllColleges
};
module.exports = api;

function getUniversity() {
    return fc.readFile('university.xml');
}

function getAllColleges() {
    var defer = q.defer();
    getUniversity()
        .then(function ($university) {
            defer.resolve($university('college'));
        });
    return defer.promise;
}
