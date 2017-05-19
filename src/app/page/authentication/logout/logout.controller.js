(function() {
    'use strict';

    angular
        .module('app.main.authentication')
        .controller('LogoutController', LogoutController);

    /* @ngInject */
    function LogoutController($state, $http, $localStorage, $cookies, AccountService) {

        window.location.reload();

        AccountService.logout($localStorage.currentUser.accountID);

        function removeCookies() {
            $cookies.remove('accountID');
            $cookies.remove('username');
            $cookies.remove('displayName');
            $cookies.remove('avatar');
            $cookies.remove('schoolID');
            $cookies.remove('programID');
            $cookies.remove('schoolName');
            $cookies.remove('programName');
            $cookies.remove('roles');
            $cookies.remove('year');
            $cookies.remove('cgpa');           
            $localStorage.$reset(); 
            $state.go('authentication.login');
        }

        removeCookies();
    
    }
})();
