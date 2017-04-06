(function () {
    angular
        .module('validationApp', [])
        .controller('validationController', validationController);

    function validationController() {
        var model = this;
        model.hello = 'Hello from controller';
    }
})();