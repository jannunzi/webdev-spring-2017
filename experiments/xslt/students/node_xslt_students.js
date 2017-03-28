xslt = require('node_xslt')
stylesheet = xslt.readXsltFile('students.xsl');
document = xslt.readXmlFile('students.xml');
transformedString = xslt.transform(stylesheet, document, parameters);
console.log(transformedString);