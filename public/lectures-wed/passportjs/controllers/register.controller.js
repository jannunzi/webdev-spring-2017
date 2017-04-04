(function () {
    angular
        .module('passportApp')
        .controller('RegisterController', RegisterController);

    function RegisterController($location, userService) {
        var model = this;
        model.register = register;

        function register(user) {
            console.log(user);
            userService
                .register(user)
                .then(function (user) {
                    if(user) {
                        $location.url('/profile');
                    }
                }, function (err) {
                    model.error = err;
                });
        }
    }
})();