(function(){
    angular
        .module("WebAppMaker")
        .controller("loginController", loginController);
    
    function loginController(UserService, $location) {
        var vm = this;
        vm.login = login;

        function login(user) {
            var promise = UserService.findUserByCredentials(user.username, user.password);
            promise.success(function (response) {
                var loginUser = response;
                if(loginUser != null) {
                    $location.url('/profile/' + loginUser._id);
                } else {
                    vm.error = 'user not found';
                }
            });
        }
    }
})();