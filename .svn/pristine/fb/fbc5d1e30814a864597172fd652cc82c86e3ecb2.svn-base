(function() {
    'use strict';

    angular
        .module('app.main.admin')
        .controller('AccountController', AccountController);

    function AccountController(AdminService,$mdDialog) {
        var vm = this;
        vm.unlock = unlock;
        vm.upgrade = upgrade;

        AdminService.getLockList().then(function(response) {
            vm.lockList = response.data;
        });
        AdminService.getRequestList().then(function(response) {
            vm.requestList = response.data;
        });
        function unlock(lock) {
            $mdDialog.show(
                $mdDialog.confirm()
                .title('unlock')
                .textContent('Are you sure to Unlock this Account?')
                .ok('Yes')
                .cancel('Cancel')
            ).then(function() {
                AdminService.unlock(lock);
                vm.lockList.splice(vm.lockList.indexOf(lock), 1);
            })

        }
        function upgrade(request) {
            $mdDialog.show(
                $mdDialog.confirm()
                .title('unlock')
                .textContent('Are you sure to Upgrade this Account?')
                .ok('Yes')
                .cancel('Cancel')
            ).then(function() {
                AdminService.upgrade(request);
                vm.requestList.splice(vm.requestList.indexOf(request), 1);
            })

        }
    }

})();
