(function () {
    angular
        .module('DirectivesSampleApp', ['wbdvDirectives'])
        .controller('MovieController', movieController)
        .directive('hello', helloDir)
        .directive('loremIpsum', loremIpsumDir)
        .directive('wbdvRedForeGroundColor', wbdvRedForeGroundColor)

    function wbdvRedForeGroundColor() {
        function linkFunction(scope, element) {
            element.css('color', 'red');
        }
        return {
            link: linkFunction
        }
    }

    function loremIpsumDir() {
        function linkFunction(scope, element) {
            element.append("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        }
        return {
            link: linkFunction
        }
    }

    function movieController($scope) {
        $scope.movies = [
            {title: 'Avatar'},
            {title: 'Titanic'},
            {title: 'Aliens Covenant'}
        ];
    }

    function helloDir() {
        function linkFunction(scope, element) {
            // var ul = $("<ul>");
            // var movies = ['Terminator', 'Avatar'];
            // for(var m in movies) {
            //     var li = $("<li>").append(movies[m]);
            //     li.appendTo(ul);
            // }
            // ul.appendTo('body');
            var startIndex = -1;
            var endIndex = -1;
            $('table tbody').sortable({
                axis: 'y',
                start: function (event, ui) {
                    startIndex = ui.item.index();
                },
                stop: function (event, ui) {
                    endIndex = ui.item.index();
                    console.log([startIndex, endIndex]);
                }
            });
        }
        return {
            // template: '<h2>Hello Again</h2>'
            templateUrl: 'helloTemplate.html',
            // template: function () {
            //     var html = '<table>';
            //     var movies = ['Terminator', 'Avatar'];
            //     for(var m in movies) {
            //         var tr = '<tr><td>'+movies[m]+'</td></tr>';
            //         html += tr;
            //     }
            //     html += '</table>';
            //     return html;
            // }
            link: linkFunction
        };
    }
})();