(function () {
    angular
        .module('courseApp')
        .controller('moduleController', moduleController);
    
    function moduleController() {
        var model = this;
        model.modules = [
             {_id: '123', title: 'Module 123'}
            ,{_id: '234', title: 'Module 234'}
            ,{_id: '345', title: 'Module 345'}
            ,{_id: '456', title: 'Module 456'}
        ];
    }
})();