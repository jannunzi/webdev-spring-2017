(function () {
    angular
        .module('UploadExampleApp', [])
        .controller('UploadExampleController', UploadExampleController);
    function UploadExampleController() {
        var vm = this;
        vm.upload = upload;
        var widget = {
            _id: '123',
            width: 21
        };
        vm.widget = widget;
        
        function upload() {
            
        }
    }
})();