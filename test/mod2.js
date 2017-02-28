console.log('mod2');
module.exports = function () {
    console.log('mod22');
    var m1 = require('./mod1')();
    // console.log(m1);
    console.log(m1.getA());
    m1.setA(234);
    console.log(m1.getA());
};