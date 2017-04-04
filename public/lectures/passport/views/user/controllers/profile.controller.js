(function () {
    angular.module('passportApp')
        .controller('profileController', profileController);
    
    function profileController(currentUser, userService, $location) {
        var model = this;

        model.logout = logout;
        model.unregisterUser = unregisterUser;
        model.updateProfile = updateProfile;
        
        model.currentUser = currentUser;
        
        console.log(currentUser);

        function updateProfile(user) {
            userService
                .updateProfile(user)
                .then(function () {
                    model.message = 'Profile successfully updated!!';
                });
        }

        function unregisterUser(userId) {
            userService
                .unregisterUser(userId)
                .then(function () {
                    $location.url('/login');
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