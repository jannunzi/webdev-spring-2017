(function () {
    angular
        .module('OmdbApp')
        .controller('SearchController', SearchController);

    function SearchController($state) {
        var model = this;
        model.search = search;

        function init() {

        }
        init();

        function search(title) {
            $state.go('search.results', {title: title});
        }
    }
})();