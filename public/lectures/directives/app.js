(function () {
    angular
        .module('DirectiveApp', [])
        .directive('hello', helloDir)
        .directive('helloWorld', helloWorldDir)
        .directive('colorMeRed', colorMeRedDir)
        .directive('makeMeDraggable', makeMeDraggableDir)
        .directive('makeMeSortable', makeMeSortableDir)

    function makeMeSortableDir() {
        function linkFunc(scope, element) {
            element.sortable();
        }
        return {
            link: linkFunc
        };
    }

    function makeMeDraggableDir() {
        function linkFunc(scope, element) {
            element.draggable();
        }
        return {
            link: linkFunc
        };
    }

    function colorMeRedDir() {
        function linkFunc(scope, element) {
            console.log(element);
            element.css('color', 'red');
        }
        return {
            link: linkFunc
        };
    }
    
    function helloDir() {
        var config = {
            template: '<h2>Hello From Hello Directive</h2>'
        };
        return config;
    }
    
    function helloWorldDir() {
        var config = {
            templateUrl: 'hellowWorld.html'
        };
        return config;
    }
})();