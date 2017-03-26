(function () {
    angular.module('passportApp', [])
        .controller('loginController', loginController);
    
    function loginController($http) {
        var model = this;
        model.login = function (user) {
            $http.post('/api/lecture-morning/login', user)
                .then(function (response) {
                    console.log(response);
                    model.message = 'Welcome';
                    model.user = response;
                }, function (err) {
                    model.error = err;
                });
        }
    }
})();