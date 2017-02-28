module.exports = function () {
    console.log('mod1');
    this.a = 123;
    this.getA = function () {
        return this.a;
    }
    this.setA = function (a) {
        this.a = a;
    }
    return this;
};