console.log('mod3');
require('./mod2')();
var m1 = require('./mod1')();
console.log('mod33');
console.log(m1.getA());