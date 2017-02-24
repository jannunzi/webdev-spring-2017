(function () {
    $(init);

    function init() {
        var loginBtn = $('#loginBtn');
        var usernameFld = $('#username');
        var passwordFld = $('#password');
        
        loginBtn.click(login);
        
        function login() {
            var username = usernameFld.val();
            var password = passwordFld.val();
            var url = '/api/user?username='+username+'&password='+password;
            $.ajax({
                url: url,
                success: handleSuccessgulLogin
            });
        }

        function handleSuccessgulLogin(user) {
            var userId = user._id;
            var url = 'profile.html?userId='+userId;
            window.location.href = url;
        }
    }
})();