module.exports = function (app) {
    app.get("/api/morning/user", findUserByCredentials);

    var users = [
        {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
        {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
        {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
        {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
    ];

    function findUserByCredentials(req, res){
        var username = req.query['username'];
        var password = req.query['password'];
        var user = users.find(function(u){
            return u.username == username && u.password == password;
        });
        res.send(user);
    }
};