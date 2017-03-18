(function () {
    angular
        .module('FlickrApp')
        .controller('photoSearchController', photoSearchController);

    function photoSearchController(flickrService) {
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