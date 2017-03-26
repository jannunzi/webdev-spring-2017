(function () {
    angular
        .module('passportApp')
        .controller('profileController', profileController);

    function profileController(userService, $location, currentUser) {
        var model = this;
        model.currentUser = currentUser;
        model.logout = logout;

        function init() {
        }
        init();

        function logout() {
            userService
                .logout()
                .then(function (reponse) {
                    $location.url('/login');
                });
        }
        
    }
})();