(function () {
    angular.module('passportApp')
        .controller('registerController', registerController);
    
    function registerController($http, $location, userService) {
        var model = this;
        model.register = function (user) {
            userService
                .register(user)
                .then(function (user) {
                    if(user) {
                        $location.url('/profile');
                    }
                }, function (err) {
                    model.message = err;
                });
        }
    }
})();