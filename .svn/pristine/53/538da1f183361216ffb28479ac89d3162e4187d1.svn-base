(function() {
    'use strict';

    angular
        .module('app.main.authentication', ['permission'])
        .controller('LoginController', LoginController);

    /* @ngInject */
    function LoginController($state, $scope, $window, triSettings, triSkins, $localStorage, $http, AccountService, $mdDialog, $cookies, triMenu, MentorshipService) {
        var vm = this;
        vm.loginClick = loginClick;
        vm.socialLogins = [{
            icon: 'fa fa-twitter',
            color: '#5bc0de',
            url: '#'
        }, {
            icon: 'fa fa-facebook',
            color: '#337ab7',
            url: '#'
        }, {
            icon: 'fa fa-google-plus',
            color: '#e05d6f',
            url: '#'
        }, {
            icon: 'fa fa-linkedin',
            color: '#337ab7',
            url: '#'
        }];


        vm.triSettings = triSettings;
        vm.skins = triSkins.getSkins();
        console.log(vm.skins);


        vm.user = {
            username: '',
            password: '',
            rememberMe: false
        };

        ////////////////
        function checkCookies() {
            if (($cookies.get('accountID') != null) && ($cookies.get('username') != null)) {
                var account = {
                    accountID: $cookies.get('accountID'),
                    displayName: $cookies.get('displayName'),
                    username: $cookies.get('username'),
                    avatar: $cookies.get('avatar'),
                    schoolID: $cookies.get('schoolID'),
                    programID: $cookies.get('programID'),
                    schoolName: $cookies.get('schoolName'),
                    programName: $cookies.get('programName'),
                    roles: $cookies.get('roles'),
                    year: $cookies.get('year'),
                    cgpa: $cookies.get('cgpa')
                };
                $state.go('triangular.dashboard');
            }
        }
        checkCookies();

        function loginClick() {
            var LoginChecker = AccountService.loginChecker(vm.user.username, vm.user.password);
            LoginChecker.then(function(response) {
                console.log(response.data);
                if (response.data.status == 'true') {
                    $localStorage.changeTheme = false;
                    $localStorage.currentUser = response.data;
                    if (vm.user.rememberMe == true) {
                        AccountService.setCookies(response.data);
                    }
                    AccountService.checkMenu();
                    if (response.data.mentor != 0) {
                        init(response.data.mentor);
                    }
                    if (response.data.roles[0] == 'MENTOR') {
                        $cookies.put('triangular-skin', angular.toJson({
                            skin: vm.skins['Mentor'].id
                        }));
                        $localStorage.changeTheme = true;
                    } else if (response.data.roles[0] == 'ADMIN') {
                        $cookies.put('triangular-skin', angular.toJson({
                            skin: vm.skins['Admin'].id
                        }));
                        $localStorage.changeTheme = true;
                    } else {
                        $cookies.put('triangular-skin', angular.toJson({
                            skin: vm.skins['Student'].id
                        }));
                        $localStorage.changeTheme = true;

                    }


                    $state.go('triangular.dashboard');
                } else if (response.data.status == 'occupied') {
                    occupied();
                } else if (response.data.status == 'locked') {
                    locked();
                } else if (response.data.status == null) {
                    user404();
                } else {
                    createDialog(response.data.chance);
                }
            });
        }

        function user404($event) {
            $mdDialog.show(
                $mdDialog.confirm()
                .title('You have input wrong username')
                .textContent('We cannot find this username.')
                .ok('Ok')
                .targetEvent($event)
            );
        }

        function locked($event) {
            $mdDialog.show(
                $mdDialog.confirm()
                .title('You have fail login for 5 times')
                .textContent('Your account has been locked due to security issue, please contact our system admin.')
                .ok('Ok')
                .targetEvent($event)
            );
        }

        function occupied($event) {
            $mdDialog.show(
                $mdDialog.confirm()
                .title('Account Occupied')
                .textContent('You have already logined')
                .ok('Ok')
                .targetEvent($event)
            );
        }

        function createDialog(chance) {
            $mdDialog.show(
                $mdDialog.confirm()
                .title('You have input wrong password')
                .textContent('You have ' + chance + ' more chance.')
                .ok('Ok')
            );
        }
        // set mentor in session
        function init(accountID) {
            MentorshipService.getOthersAccount(accountID).then(function(response) {
                $localStorage.mentor = response.data;
            });
        }
    }
})();
