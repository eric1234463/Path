(function() {
    'use strict';

    angular
        .module('app.main.admin')
        .controller('TimlineManagementDialogController', TimlineManagementDialogController);

    function TimlineManagementDialogController(AdminService, $mdDialog) {

        var vm = this;
        vm.newEvent = {
            eventName: "",
            eventDetail: "",
            eventDate: ""
        };
        vm.cancelClick = cancelClick;
        vm.okClick = okClick;

        function cancelClick() {
            $mdDialog.cancel();
        }

        function okClick() {
            vm.newEvent.eventDate = moment(vm.newEvent.eventDate).format('YYYY-MM-DD');
            AdminService.createEvent(vm.newEvent);
            $mdDialog.hide(vm.newEvent);
        }
    }

})();
