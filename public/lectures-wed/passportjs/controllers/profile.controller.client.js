(function () {
    angular
        .module('passportApp')
        .controller('profileController', profileController);
    
    function profileController(currentUser, userService, $location) {
        var model = this;
        model.currentUser = currentUser;
        model.logout = function () {
            userService
                .logout()
                .then(function () {
                    $location.url('/login');
                });
        }
    }
})();