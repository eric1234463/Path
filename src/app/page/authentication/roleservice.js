(function() {
    'use strict';
    angular
        .module('app.main.authentication')
        .factory('RoleService', RoleService);

    function RoleService($rootScope, $http, PermissionStore, RoleStore, AccountService,$localStorage) {

        var RoleService = {
            setPermission: setPermission
        };
        return RoleService;

        function setPermission() {
            $http.get('http://erickwong.hk/path2/php/account.php?action=getRole').then(function(response) {
                $localStorage.permissions = response.data.Permissions;
                $localStorage.userRoles = response.data.UserRoles;
                PermissionStore.defineManyPermissions($localStorage.permissions, function(permissionName) {
                    return AccountService.hasPermission(permissionName);
                });
                RoleStore.defineManyRoles($localStorage.userRoles);
            });
        }


    }
})();
