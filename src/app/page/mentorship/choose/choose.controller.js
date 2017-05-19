(function() {
    'use strict';

    angular
        .module('app.main.mentorship')
        .controller('ChooseController', ChooseController);

    function ChooseController(MentorshipService, $localStorage, $mdDialog, $mdToast) {

        var vm = this;
        vm.currentUser = $localStorage.currentUser;
        vm.dialog = dialog;


        function getYourMentor(schoolID, programID) {
            MentorshipService.getYourMentor(vm.currentUser.schoolID, vm.currentUser.programID).then(function(response) {
                vm.mentorList = response.data;
            });
        }


        function dialog(mID) {
            $mdDialog.show(
                $mdDialog.confirm()
                .title('Are You Sure?')
                .textContent('You cannot change your mentor after this step')
                .ok('Ok')
                .cancel('cancel')
            ).then(function() {
                choose(mID);
            });
        }

        function choose(mID) {
            MentorshipService.chooseMentor(mID, vm.currentUser.accountID);
            $mdToast.show(
                $mdToast.simple()
                .content('You Have to Logout in order to update your mentorship function.')
                .position('bottom right')
                .hideDelay(20000)
            );
        }

        getYourMentor();

    }

})();
