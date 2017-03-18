(function () {
    angular
        .module('wam')
        .service('userService', userService);

    function userService($http) {
        this.selectedUser = null;
        this.createUser = createUser;
        this.findAllUsers = findAllUsers;
        this.findUserById = findUserById;
        this.deleteUser = deleteUser;
        this.updateUser = updateUser;

        function createUser(user) {
            return $http.post('/api/experiments/mongoose/wam/user', user)
                .then(function (response) {
                    return response.data;
                });
        }
        function findAllUsers() {
            return $http.get('/api/experiments/mongoose/wam/user')
                .then(function (response) {
                    return response.data;
                });
        }
        function findUserById(userId) {
            return $http.get('/api/experiments/mongoose/wam/user/' + userId)
                .then(function (response) {
                    return response.data;
                });
        }
        function updateUser(userId, user) {
            return $http.put('/api/experiments/mongoose/wam/user/' + userId, user)
                .then(function (response) {
                    return response.data;
                });
        }
        function deleteUser(userId) {
            return $http.delete('/api/experiments/mongoose/wam/user/' + userId)
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();