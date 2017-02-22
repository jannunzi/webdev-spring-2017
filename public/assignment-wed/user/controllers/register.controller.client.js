(function () {
    angular
        .module("WebAppMaker")
        .controller("RegisterController", registerController);
    
    function registerController($location, UserService) {
        var vm = this;

        // event handlers
        vm.register = register;

        function init() {
        }
        init();

        function register(user) {
            UserService
                .findUserByUsername(user.username)
                .success(function (user) {
                    vm.message = "That username is already taken";
                })
                .error(function(err) {
                    vm.message = "Available";
                });
        }
    }
})();