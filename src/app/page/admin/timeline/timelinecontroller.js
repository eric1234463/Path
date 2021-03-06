(function() {
    'use strict';

    angular
        .module('app.main.admin')
        .controller('TimlineManagementController', TimlineManagementController);

    function TimlineManagementController(AdminService, $mdDialog) {
        var vm = this;
        vm.editMode = false;
        vm.editON = editON;
        vm.save = true;
        vm.submit = submit;
        vm.cancel = cancel;
        vm.remove = remove;
        vm.create = create;
        AdminService.getEventList().then(function(response) {
            vm.eventList = response.data;
            for (i = 0; i < vm.eventList.length; i++) {
                vm.eventList[i].eventDate = new Date(vm.eventList[i].eventDate);
            }
        });

        function editON() {
            vm.editMode = true;
            vm.save = false;
        }

        function cancel() {
            vm.editMode = false;
            vm.save = true;
        }

        function remove(event) {
            $mdDialog.show(
                $mdDialog.confirm()
                .title('Delete Event')
                .textContent('Are you sure to Delete this Event?')
                .ok('Yes')
                .cancel('Cancel')
            ).then(function() {
                vm.eventList.splice(vm.eventList.indexOf(event), 1);
                AdminService.removeEvent(event);
            })
        }

        function submit() {
            vm.editMode = false;
            vm.save = true;
            for (var i = 0; i < vm.eventList.length; i++) {
                vm.eventList[i].eventDate = moment(vm.eventList[i].eventDate).format('YYYY-MM-DD')
                AdminService.setEvent(vm.eventList[i]);
            }

            $mdDialog.show(
                $mdDialog.alert()
                .title('Update Success')
                .textContent('You Already Update the Event Information!')
                .ok('Ok')
            ).then(function() {
                vm.eventList[i].eventDate = new Date(vm.eventList[i].eventDate);
            })
        }

        function create() {
            $mdDialog.show({
                controller: 'TimlineManagementDialogController',
                controllerAs: 'vm',
                templateUrl: 'app/page/admin/timeline/timedialog.html',
                focusOnOpen: false
            }).then(function(event) {
                vm.eventList.push(event);
            });
        }
    }

})();
