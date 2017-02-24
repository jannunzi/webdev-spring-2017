(function () {
    angular
        .module('wbdvDirectives', [])
        .directive('wbdvDraggable', wbdvDraggableDir)
        .directive('wbdvSortable', wbdvSortableDir);

    function wbdvSortableDir() {
        function linkFunction(scope, element) {
            element.sortable();
        }
        return {
            link: linkFunction
        }
    }

    function wbdvDraggableDir() {
        function linkFunction(scope, element) {
            element.draggable();
        }
        return {
            link: linkFunction
        }
    }

})();