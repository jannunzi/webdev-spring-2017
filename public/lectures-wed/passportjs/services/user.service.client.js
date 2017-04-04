(function () {
    angular.module('passportApp')
        .service('userService', userService);

    function userService($http) {
        this.login = login;
        this.loggedin = loggedin;
        this.logout = logout;
        this.register = register;
        this.isAdmin = isAdmin;
        this.findAllUsers = findAllUsers;
        this.deleteUser = deleteUser;
        this.updateUser = updateUser;
        this.updateProfile = updateProfile;

        function updateProfile(user) {
            return $http.put('/api/lectures-wed/profile/' + user._id, user)
                .then(function (response) {
                    return response.data;
                });
        }

        function updateUser(user) {
            return $http.put('/api/lectures-wed/user/' + user._id, user)
                .then(function (response) {
                    return response.data;
                });
        }

        function deleteUser(userId) {
            return $http.delete('/api/lectures-wed/user/' + userId)
                .then(function (response) {
                    return response.data;
                });
        }

        function findAllUsers() {
            return $http.get('/api/lectures-wed/user')
                .then(function (response) {
                    return response.data;
                });
        }
        
        function isAdmin() {
            return $http.post('/api/lectures-wed/isAdmin')
                .then(function (response) {
                    return response.data;
                });
        }
        
        function register(user) {
            return $http.post('/api/lectures-wed/register', user)
                .then(function (response) {
                    return response.data;
                });
        }
        
        function logout() {
            return $http.post('/api/lectures-wed/logout')
                .then(function (response) {
                    return response.data;
                });
        }

        function loggedin() {
            return $http.post('/api/lectures-wed/loggedin')
                .then(function (response) {
                    return response.data;
                });
        }
        
        function login(user) {
            return $http.post('/api/lectures-wed/login', user)
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();