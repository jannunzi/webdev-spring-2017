module.exports = function(app) {
    app.get('/hello/:name/:asd/:sdfsdf', sayHello);
    app.get('/lectures/todo', readAllTodos);

    var todos = [
        {title: 'milk', note: 'organic'},
        {title: 'kids', note: 'school'}
    ];

    function readAllTodos(req, res) {
        res.json(todos);
    }

    function sayHello(req, res) {
        var name = req.params.name;
        var age = req.query.age;
        res.send('goodbye world: ' + name +  ' age: ' + age);
    }
};