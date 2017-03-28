var xslt4node = require('xslt4node');
console.log(xslt4node);

var config = {
    xsltPath: 'students.xsl',
    sourcePath: 'students.xml',
    result: 'result.xml',
    props: {
        indent: 'yes'
    }
};

xslt4node.transform(config, function (err) {
    if (err) {
        console.log(err);
    }
});
