(function() {
    'use strict';

    angular
        .module('app.main.study')
        .controller('GrpController', GrpController);

    /* @ngInject */
    function GrpController ($localStorage, $mdDialog, $stateParams, StudyService) {
        var vm = this;
        
         var grpID = $stateParams.grpID;

        StudyService.getGrp(grpID, $localStorage.currentUser.accountID).then(function(response) {
            vm.grp = response.data;
            console.log(vm.grp);
        });
    }

})();
