(function() {
    'use strict';

    angular
        .module('triangular.components')
        .controller('RightSidenavController', RightSidenavController);

    /* @ngInject */
    function RightSidenavController($scope, $http, $mdSidenav, $state, $localStorage,AccountService) {
        var vm = this;
        // sets the current active tab
        vm.close = close;
        vm.currentTab = 0;
        vm.currentUser = $localStorage.currentUser;
        vm.read = read;
        ////////////////

        // add an event to switch tabs (used when user clicks a menu item before sidebar opens)
        $scope.$on('triSwitchNotificationTab', function($event, tab) {
            vm.currentTab = tab;
            console.log(vm.currentUser.notificationGroup);
        });


        function close() {
            $mdSidenav('notifications').close();
        }
        function read(notification){
            notification.read = true;
            AccountService.setReadNotification(notification);
            vm.currentUser.notificationCount -=1;
            $localStorage.currentUser = vm.currentUser;
            $mdSidenav('notifications').close();
        }
    }
})();
