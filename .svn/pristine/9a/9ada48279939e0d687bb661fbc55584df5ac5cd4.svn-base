(function() {
    'use strict';

    angular
        .module('triangular.components')
        .controller('LeftSidenavController', LeftSidenavController);

    /* @ngInject */
    function LeftSidenavController(triSettings, triLayout, RoleStore, PermissionStore, AccountService, $localStorage) {
        var vm = this;
        vm.layout = triLayout.layout;
        vm.sidebarInfo = {
            appName: triSettings.name,
            appLogo: triSettings.logo
        };
        vm.toggleIconMenu = toggleIconMenu;

        ////////////
        PermissionStore.defineManyPermissions($localStorage.permissions, function(permissionName) {
                    return AccountService.hasPermission(permissionName);
                });
        RoleStore.defineManyRoles($localStorage.userRoles);
        AccountService.checkMenu();

        function toggleIconMenu() {
            var menu = vm.layout.sideMenuSize === 'icon' ? 'full' : 'icon';
            triLayout.setOption('sideMenuSize', menu);
        }
    }
})();
