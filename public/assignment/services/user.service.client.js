(function(){
    angular
        .module("WebAppMaker")
        .factory('UserService', userService);
    
    function userService($http) {
        var users = [
            {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
            {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
            {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
            {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
        ];

        var api = {
            "users": users,
            "createUser": createUser,
            "deleteUser": deleteUser,
            "updateUser": updateUser,
            "findUserByCredentials": findUserByCredentials,
            "findUserById": findUserById,
            "findUserByUsername": findUserByUsername
        };
        return api;

        function deleteUser(userId) {
            return $http.delete('/api/morning/user/'+userId);
        }

        function createUser(user) {
            return $http.post("/api/morning/user", user);
        }

        function findUserByUsername(username) {
            return $http.get("/api/morning/user?username="+username);
        }

        function findUserByCredentials(username, password) {
            return $http.get("/api/morning/user?username="+username+"&password="+password);
        }

        function updateUser(userId, newUser) {
            return $http.put("/api/morning/user/"+userId, newUser);
        }

        function findUserById(uid) {
            return $http.get("/api/morning/user/"+uid);
        }
    }
})();