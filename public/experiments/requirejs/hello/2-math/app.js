define([
    "math"
], function (
    math
) {
    function doit() {
        var result = math.add(2, 3);
        console.log(result);
    }
    return doit;
});