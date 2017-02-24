(function () {
    $(init);
    
    function init() {
        var href = window.location.href;
        var query = href.split('?')[1];
        var userId = query.split('=')[1];
        console.log(userId);

        var url = '/api/user/'+userId;

        $.ajax({
            url: url,
            success: renderUser
        });

        function renderUser(user) {
            $("#first").val(user.firstName);
            $("#last").val(user.lastName);
        }
    }
})();