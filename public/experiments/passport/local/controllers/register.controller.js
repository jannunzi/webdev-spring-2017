(function () {
    angular
        .module('passportApp')
        .controller('registerController', registerController);

    function registerController(userService, $location) {
        var model = this;
        
        model.register = register;
        
        function register(user) {
            userService
                .register(user)
                .then(function () {
                    $location.url('/profile');
                });
        }
    }
})();