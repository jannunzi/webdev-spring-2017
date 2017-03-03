define(['moduleb'], function (moduleb) {

    moduleb.says('hello');

    return {
        says: function (message) {
            alert('module A says: ' + message);
        }
    }
});