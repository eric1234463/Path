(function() {
    'use strict';
    angular
        .module('app.main.live')
        .controller('NewChoiceController', NewChoiceController);

    function NewChoiceController(LiveService, $mdDialog) {
        var vm = this;
        vm.getProgramList = getProgramList;
        vm.create = create;
        vm.choice = {
            school: 0,
            program: 0,
            gpa: undefined,
            dse: undefined
        };

        LiveService.getSchoolList().then(function(response) {
            vm.schoolList = response.data;
        });

        function getProgramList() {
            LiveService.getProgramList(vm.choice.school).then(function(response) {
                vm.programList = response.data;
            });
        }

        function create() {
            LiveService.createChoice(vm.choice);
            $mdDialog.show(
                $mdDialog.alert()
                .title('Create Success')
                .textContent('Thank You for your join')
                .ok('Ok')
            );
        }
    }
})();
