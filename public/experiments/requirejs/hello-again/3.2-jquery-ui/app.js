define([
    'jquery',
    'jqueryui',
    'bootstrap'
],
    function () {
        $('body').append('<h2>Hello from jQuery</h2>');
        $('ul').sortable();
});