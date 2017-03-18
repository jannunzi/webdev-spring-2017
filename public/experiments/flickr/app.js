(function () {
    angular
        .module('FlickrApp', ['jga-flickr'])
        .controller('flickrController', flickrController)

    function flickrController(flickrService) {
        var model = this;
        model.flickrPhotosSearch = flickrPhotosSearch;

        function flickrPhotosSearch(text) {
            flickrService
                .flickrPhotosSearch(text)
                .then(function (response) {
                    model.photos = response.photos.photo;
                });
        }
    }
})();