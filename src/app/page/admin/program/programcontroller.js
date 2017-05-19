(function() {
    'use strict';

    angular
        .module('app.main.admin')
        .controller('ProgramController', ProgramController);

    function ProgramController(AdminService, $mdDialog) {
        var vm = this;
        vm.editMode = false;
        vm.editON = editON;
        vm.save = true;
        vm.submit = submit;
        vm.cancel = cancel;
        AdminService.getProgramList().then(function(response) {
            vm.schoolList = response.data;
        });
        AdminService.getProgramTypeList().then(function(response) {
            vm.programTypeList = response.data;
        });

        function editON() {
            vm.editMode = true;
            vm.save = false;
        }

        function cancel() {
            vm.editMode = false;
            vm.save = true;
        }

        function submit() {
            vm.editMode = false;
            vm.save = true;
            for (var i = 0; i < vm.schoolList.length; i++) {
                var school = vm.schoolList[i];
                var schoolID = vm.schoolList[i].schoolID;
                for (var j = 0; j < school.programList.length; j++) {
                    var program = school.programList[j];
                    AdminService.setProgram(schoolID, program);
                }
            }

            $mdDialog.show(
                $mdDialog.alert()
                .title('Update Success')
                .textContent('You Already Update the Program Information!')
                .ok('Ok')
            );
        }

    }

})();
