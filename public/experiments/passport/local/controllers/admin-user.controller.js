(function () {
    angular
        .module('passportApp')
        .controller('adminUserController', adminUserController);
    
    function adminUserController(userService) {
        var model = this;

        function init() {
            findAllUsers();
        }
        init();

        function findAllUsers() {
            userService
                .findAllUsers()
                .then(renderAllUsers);
        }

        function renderAllUsers(allUsers) {
            model.users = allUsers;
        }
    }
})();