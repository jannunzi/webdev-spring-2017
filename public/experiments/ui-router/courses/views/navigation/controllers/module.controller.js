(function () {
    angular
        .module('courseApp')
        .controller('moduleController', moduleController);
    
    function moduleController() {
        var model = this;
        model.modules = [
            {title: 'Module 123'}
            ,{title: 'Module 234'}
            ,{title: 'Module 345'}
            ,{title: 'Module 456'}
        ];
    }
})();