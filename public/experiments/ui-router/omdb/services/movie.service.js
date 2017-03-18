(function () {
    angular.module('OmdbApp')
        .service('MovieService', MovieService);

    function MovieService($http) {
        this.searchMovieByTitle = searchMovieByTitle;
        this.searchMovieByImdbID = searchMovieByImdbID;

        function searchMovieByImdbID(imdbID) {
            var url = 'http://www.omdbapi.com?i=' + imdbID;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function searchMovieByTitle(title) {
            var url = 'http://www.omdbapi.com?s=' + title;
            return $http.get(url)
                .then(function (response) {
                    return response.data.Search;
                });
        }
    }
})();