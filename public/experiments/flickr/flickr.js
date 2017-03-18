(function () {
    angular
        .module('jga-flickr', [])
        .service('flickrService', flickrService)
        .directive('jga-flickr-search', jgaFlickrSearch);
    
    var FLICKR_API_PREFIX = '/api/experiments/flickr';
    
    function flickrService($http) {
        this.flickrPhotosSearch = flickrPhotosSearch;
        
        function flickrPhotosSearch(text) {
            var url = FLICKR_API_PREFIX + '/flickr.photos.search?text='+text;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }
    }
    
    function jgaFlickrSearch() {
        
    }
})();