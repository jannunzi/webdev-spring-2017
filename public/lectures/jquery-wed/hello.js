(function () {
    $(init);

    function init(){
        var h1 = $('h1');
        h1.css('color', 'red')
            .html('Hello Again!!');

        var h2 = $('<h2>Section 123</h2>');
        var theBody = $('body');
        theBody.append(h2);

        var paragraph = $("<p>");
        paragraph.append("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        theBody.prepend(paragraph);

        $('p')
            .css('background-color', 'yellow')
            //.draggable();

        var movies = ['Terminator', 'Titanic', 'Aliens', 'Avatar'];

        var list = $("<table>");
        for(var m in movies) {
            var tr = $("<tr>");
            var td = $('<td>').append(movies[m]);
            td.appendTo(tr);
            // var li = $("<li>"+movies[m]+"</li>");
            list.append(tr);
        }
        list.appendTo(theBody);
        // theBody.append(list);
        $('h1').draggable();

        list.sortable();
    }
})();