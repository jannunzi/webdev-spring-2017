require.config({

    // alias libraries paths
    paths: {
        'domReady': 'vendor/requirejs-domready/domReady',
        'angular': 'vendor/angular/angular',
        'angularRoute': 'vendor/angular-route/angular-route'
    },

    // angular does not support AMD out of the box, put it in a shim
    shim: {
        'angular': {exports: 'angular'},
        'angularRoute': {exports: 'angularRoute', deps: 'angular'}
    },

    // kick start application
    deps: ['./bootstrap']
});