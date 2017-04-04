(function () {
    angular
        .module('passportApp')
        .service('userService', userService)
        .factory('userService2', userService2)

    function userService($http) {
        this.login = login;
        this.loggedin = loggedin;
        this.logout = logout;
        this.register = register;
        this.isAdmin = isAdmin;
        this.findAllUser = findAllUser;
        this.deleteUser = deleteUser;
        this.unregisterUser = unregisterUser;
        this.updateUser = updateUser;
        this.updateProfile = updateProfile;

        function updateProfile(user) {
            return $http.put('/api/lecture-morning/user/'+user._id, user)
                .then(function (response) {
                    return response.data;
                });
        }

        function updateUser(user) {
            return $http.put('/api/lecture-morning/admin/user/'+user._id, user)
                .then(function (response) {
                    return response.data;
                });
        }

        function unregisterUser(userId) {
            return $http.delete('/api/lecture-morning/user/'+userId)
                .then(function (response) {
                    return response.data;
                });
        }

        function deleteUser(userId) {
            return $http.delete('/api/lecture-morning/admin/user/'+userId)
                .then(function (response) {
                    return response.data;
                });
        }

        function findAllUser() {
            return $http.get('/api/lecture-morning/admin/user')
                .then(function (response) {
                    return response.data;
                });
        }

        function isAdmin() {
            return $http.post('/api/lecture-morning/isAdmin')
                .then(function (response) {
                    return response.data;
                });
        }

        function register(user) {
            return $http.post('/api/lecture-morning/register', user)
                .then(function (response) {
                    return response.data;
                });
        }
        
        function logout() {
            return $http.post('/api/lecture-morning/logout')
                .then(function (response) {
                    return response.data;
                });
        }
        
        function loggedin() {
            return $http.post('/api/lecture-morning/loggedin')
                .then(function (response) {
                    return response.data;
                });
        }

        function login(user) {
            return $http.post('/api/lecture-morning/login', user)
                .then(function (response) {
                    return response.data;
                });
        }
    }

    function userService2($http) {
        var api = {
            login: login
        };
        return api;

        function login(user) {
            return $http.post('/api/lecture-morning/login', user)
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();