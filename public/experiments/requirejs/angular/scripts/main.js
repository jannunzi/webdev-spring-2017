(function () {
    require
        .config({
            paths: {
                'jquery' : '../../../../js/jquery',
                'bootstrap' : '../../../../js/bootstrap',
                'angular': '../../../../js/angular'
            },
            shim: {
                'jquery' : {exports: 'jquery'},
                'bootstrap' : {deps: ['jquery']},
                'angular': {exports: 'angular'}
            }
        });

    require([
        'app'
    ],
        function(app) {
            console.log(angular);
        }
    );
})();