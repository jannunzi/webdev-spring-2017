(function () {
    angular
        .module('passportApp')
        .controller('loginController', loginController);

    function loginController(userService, $location) {
        var model = this;
        
        model.login = login;
        
        function login(user) {
            console.log(user);
            userService
                .login(user)
                .then(function (user) {
                    if(user) {
                        $location.url('/profile')
                    } else {
                        model.error = 'Sorry cant login'
                    }
                });
        }
    }
})();