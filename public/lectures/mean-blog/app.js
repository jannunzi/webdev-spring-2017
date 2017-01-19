angular
    .module('BlogApp', [])
    .controller('BlogController', blogController);

function blogController($scope, $http) {

    $http.get('/blog').success(function (response) {
        console.log(response);
        $scope.blogPosts = response;
    });

    $scope.createPost = createPost;
    $scope.deletePost = deletePost;
    $scope.deleteAll = deleteAll;
    $scope.selectPost = selectPost;
    $scope.updatePost = updatePost;
    $scope.post = {};

    function updatePost(post) {
        $scope.blogPosts[$scope.indexPost].title = post.title;
        $scope.blogPosts[$scope.indexPost].body = post.body;
        $scope.post = {};
    }

    function selectPost(post) {
        $scope.indexPost = $scope.blogPosts.indexOf(post);
        console.log($scope.indexPost);
        $scope.post.title = post.title;
        $scope.post.body  = post.body;
    }

    function deleteAll() {
        $scope.blogPosts = [];
    }
    function createPost (post) {
        var newPost = {
            title: post.title,
            body: post.body
        };
        $scope.blogPosts.push(newPost);
    }
    function deletePost (post) {
        console.log(post);
        var indexPost = $scope.blogPosts.indexOf(post);
        $scope.blogPosts.splice(indexPost, 1);
    }
}