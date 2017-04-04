var fs = require('fs-cheerio');
fs.readFile('university.xml')
    .then(function (university) {
        // console.log(university);
        var colleges = university('college');
        // console.log(colleges);
        for(var c=0; c<colleges.length; c++) {
            var name = colleges[c].attribs['name'];
            // console.log(name);
        }
        var deans = university('college dean');
        for(var d=0; d<deans.length; d++) {
            var name = deans[d].attribs.name;
            // console.log(name);
        }
        var courses = university('course');
        for(var c=0; c<courses.length; c++) {
            var name = courses[c].attribs.name;
            university(courses[c]).attr('credits', 4);
            // console.log(name);
        }
        // fs.writeFile('university2.xml', university);
        var cg = university('<course>');
            cg.attr('name', 'computer graphics');
        university('college[name="computer science"] courses')
            .append(cg);
        fs.writeFile('university2.xml', university);
    });