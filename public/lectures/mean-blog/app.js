angular
    .module('BlogApp', [])
    .controller('BlogController', BlogController);

function BlogController($scope) {
    $scope.blogPosts = [
        {title: 'Post 1', content: 'Content 1'},
        {title: 'Post 2', content: 'Content 2'},
        {title: 'Post 3', content: 'Content 3'},
        {title: 'Post 4', content: 'Content 4'},
        {title: 'Post 5', content: 'Content 5'}
    ];
}