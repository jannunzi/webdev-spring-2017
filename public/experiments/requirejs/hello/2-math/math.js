define([], function () {
    var api = {
        add: add
    };
    return api;

    function add(a, b) {
        return a + b;
    }
});