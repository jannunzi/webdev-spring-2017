(function () {
    angular
        .module('passportApp')
        .controller('profileController', profileController);

    function profileController(currentUser, userService, $location) {
        var model = this;
        
        model.logout = logout;
        model.updateProfile = updateProfile;

        model.currentUser = currentUser;

        function updateProfile(user) {
            userService
                .updateProfile(user)
                .then(function () {
                    model.message = 'Profile successfully updated';
                }, function () {
                    model.message = 'Unable to update profile';
                });
        }

        function logout() {
            userService
                .logout()
                .then(function () {
                    $location.url('/login');
                });
        }
    }
})();