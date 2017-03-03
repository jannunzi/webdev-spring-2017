(function () {
    require
        .config({
            paths: {
                'bootstrap': '../../../../js/bootstrap',
                'jquery': '../../../../js/vendor/jquery-3.1.1.min',
                'jqueryui': '../../../../js/vendor/jquery-ui.min',
            },
            shim: {
                'jqueryui' : {deps: ['jquery']},
                'bootstrap': {deps: ['jquery']}
            }
        });

    require([
        'app'
    ], function () {

    });
})();
