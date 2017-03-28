(function () {
    angular.module('passportApp')
        .controller('loginController', loginController);
    
    function loginController($http, $location, userService) {
        var model = this;
        model.login = function (user) {
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