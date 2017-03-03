(function () {
    angular
        .module("MovieApp", [])
        .config(configuration)
        .controller("MovieController", MovieController);

    function configuration($httpProvider) {
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        $httpProvider.defaults.headers.put['Content-Type'] = 'application/json;charset=utf-8';
    }

    function MovieController($http) {
        var vm = this;
        vm.createMovie = createMovie;
        vm.deleteMovie = deleteMovie;
        vm.selectMovie = selectMovie;
        vm.updateMovie = updateMovie;
        vm.searchMovie = searchMovie;
        vm.favoriteMovie = favoriteMovie;

        function init() {
            findAllMovies();
        }
        init();

        function favoriteMovie(movie) {
            $http.post('/api/evening/user/123/movie/'+movie._id, movie);
        }

        function searchMovie(movie) {
            var url = "http://www.omdbapi.com/?s="+movie.title;
            $http.get(url)
                .success(function(response){
                    vm.movies = response.Search;
                });
        }

        function updateMovie(movie) {
            $http
                .put('/api/evening/movie/'+movie._id, movie)
                .success(findAllMovies);
        }

        function selectMovie(movieId) {
            $http
                .get('/api/evening/movie/'+movieId)
                .success(renderMovie);
        }

        function renderMovie(movie) {
            vm.movie = movie;
        }

        function deleteMovie(movieId) {
            $http
                .delete('/api/evening/movie/'+movieId)
                .success(findAllMovies);
        }

        function findAllMovies() {
            $http.get('/api/evening/movie')
                .success(function (movies) {
                    vm.movies = movies;
                });
        }
        
        function createMovie(movie) {
            $http
                .post('/api/evening/movie', movie)
                .success(findAllMovies);
        }
    }
})();