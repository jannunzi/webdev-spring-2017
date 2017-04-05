(function () {
    angular
        .module('validationApp', [])
        .controller('validationController', validationController);

    function validationController($scope) {
        var model = this;
        model.submit = submit;
        
        function submit() {
            // $('#json-renderer').jsonViewer($scope.form1);
        }
    }
})();