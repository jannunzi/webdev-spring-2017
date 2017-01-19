module.exports = function (app) {
    var blogPosts = [
        {title: 'my new years party', body: 'none of your business'},
        {title: 'my daughters bd', body: 'wow she turned 11'}
    ];
    app.get('/blog', findAllBlogPosts);

    function findAllBlogPosts(req, res) {
        res.json(blogPosts);
    }
    // app.get('/hello', function (req, res) {
    //     res.json({message: 'hello world from the server'});
    // });
};