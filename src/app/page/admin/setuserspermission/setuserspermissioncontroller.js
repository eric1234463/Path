(function() {
    'use strict';

    angular
        .module('app.main.admin')
        .controller('SetUsersPermissionController', SetUsersPermissionController);

    function SetUsersPermissionController(AdminService, $mdToast) {
        var vm = this;
        vm.update = update;
        vm.showToast = showToast;

        vm.query = {
            filter: '',
            limit: '',
            order: '-id',
            page: 1
        };

        function getAllFunction() {
            AdminService.getAllFunction(1).then(function(response) {
                vm.functionList = response.data;
            });
            AdminService.getAllFunction(2).then(function(response) {
                vm.functionList2 = response.data;
            });
        }

        function update() {
            var obj;
            for (var i = 0; i < vm.functionList.length; i++) {
                obj = vm.functionList[i];
                AdminService.update_S(obj.userRoleID, obj.own);
                for (var j = 0; j < vm.functionList[i].child.length; j++) {
                    obj = vm.functionList[i].child[j];
                    AdminService.update_S(obj.userRoleID, obj.own);
                }
            }

            for (var i = 0; i < vm.functionList2.length; i++) {
                obj = vm.functionList2[i];
                AdminService.update_M(obj.userRoleID, obj.own);
                for (var j = 0; j < vm.functionList2[i].child.length; j++) {
                    obj = vm.functionList2[i].child[j];
                    AdminService.update_M(obj.userRoleID, obj.own);
                }
            }
        }

        function showToast($event, position) {
            var $button = angular.element($event.currentTarget);
            $mdToast.show({
                template: '<md-toast><span flex>All Changes Have been Saved.</span></md-toast>',
                position: position,
                hideDelay: 3000,
                parent: $button.parent()
            });
        }

        getAllFunction();

    }

})();
