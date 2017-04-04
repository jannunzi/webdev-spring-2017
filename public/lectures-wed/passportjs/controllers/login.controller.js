(function () {
    angular
        .module('passportApp')
        .controller('LoginController', LoginController);

    function LoginController($http, $location, userService) {
        var model = this;
        model.login = login;

        function login(user) {
            console.log(user);
            userService
                .login(user)
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