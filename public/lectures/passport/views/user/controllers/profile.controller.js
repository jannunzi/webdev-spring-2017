(function () {
    angular.module('passportApp')
        .controller('profileController', profileController);
    
    function profileController(currentUser, userService, $location) {
        var model = this;
        model.logout = logout
        model.currentUser = currentUser;
        console.log(currentUser);
        
        function logout() {
            userService
                .logout()
                .then(function () {
                    $location.url('/login');
                });
        }
    }
})();