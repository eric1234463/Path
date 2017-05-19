(function() {
    'use strict';

    angular
        .module('app.main.authentication')
        .controller('SignupController', SignupController);




    /* @ngInject */
    function SignupController($scope, $mdDialog, $state, $mdToast, $http, $filter, triSettings, SignUpService) {
        var vm = this;
        vm.currentStep = 0;
        vm.triSettings = triSettings;
        vm.schoolList = SignUpService;
        vm.programmList = SignUpService;
        vm.accountList = SignUpService;
        vm.signupClick = signupClick;
        vm.getProgramList = getProgramList;
        vm.checkAccount = checkAccount;
        vm.emailTyping = emailTyping;
        vm.showAlert = showAlert;
        vm.showAlertTwo = showAlertTwo;
        vm.createAccount = createAccount;
        vm.sendMail = sendMail;
        vm.prevStep = prevStep;
        vm.nextStep = nextStep;
        vm.back = back;
        vm.progress = 25;
        vm.user = {
            name: '',
            email: '',
            password: '',
            confirm: '',
            school: 0,
            program: 0,
            status: 0,
            emailpath: '',
            pin: '',
            pinCode: '',
            emailDomain: ''
        };

        SignUpService.getSchoolList().then(function(response) {
            vm.schoolList = response.data;
        });

        function prevStep() {
            vm.currentStep -= 1;
            vm.progress -= 25;
        }

        function nextStep() {
            vm.currentStep += 1;
            vm.progress += 25;
        }

        function back(){
            $state.go('authentication.login');
        }

        function getProgramList() {
            var schoolID = vm.user.school;
            SignUpService.getProgramList(schoolID).then(function(response) {
                vm.programList = response.data;
                
            });

            for (var i = 0; i < vm.schoolList.length; i++) {
                if (schoolID == vm.schoolList[i].schoolID) {
                    vm.user.emailDomain = vm.schoolList[i].schoolEmail;
                    vm.user.email = vm.user.emailDomain;
                }
            }
        }

        function showAlert($event) {
            $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title('Alert Message')
                .textContent('Pin Code sent')
                .ariaLabel('Alert Dialog Demo')
                .ok('Got it!')
                .targetEvent($event)
            );
        }

        function showAlertTwo($event) {
            $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title('Alert Message')
                .textContent('Account exist')
                .ariaLabel('Alert Dialog Demo')
                .ok('Got it!')
                .targetEvent($event)
            );
        }

        function emailTyping() {
            vm.user.email = vm.user.emailDomain;
            vm.user.email = vm.user.emailpath + vm.user.emailDomain;
            if (vm.user.emailpath == angular.isUndefined) {
                vm.user.email = vm.user.emailDomain;
            }
        }

        function sendMail() {
            vm.nextStep();
            vm.user.pinCode = '';
            var i = 0;
            while (i < 4) {
                var x = Math.floor(Math.random() * 10);
                vm.user.pinCode = vm.user.pinCode + x;
                i++;
            }
            vm.showAlert();
            $http.get('http://unicomhk.net/path2/php/signup.php?action=sendMail&pin=' + vm.user.pinCode + '&email=' + vm.user.email);
        }

        function createAccount() {
            vm.nextStep();
            $http.get('http://unicomhk.net/path2/php/signup.php?action=createAccount&name=' + vm.user.name + '&schoolID=' + vm.user.school + '&programID=' + vm.user.program + '&password=' + vm.user.password + '&email=' + vm.user.email);
        }

        function checkAccount() {
            SignUpService.getAccountList().then(function(response) {
                vm.accountList = response.data;
            });
            for (var i = 0; i < vm.accountList.length; i++) {
                var result = angular.equals(vm.user.name, vm.accountList[i].accountName);
                if (result) {
                    vm.showAlertTwo();
                    vm.user.status = 1;
                    break;
                } else {
                    vm.user.status = 0;
                }
            }
        }





        ////////////////

        function signupClick() {
            $mdToast.show(
                $mdToast.simple()
                .content($filter('triTranslate')('Confirmation sent'))
                .position('bottom right')
                .action($filter('triTranslate')('Login'))
                .highlightAction(true)
                .hideDelay(0)
            ).then(function() {
                $state.go('authentication.login');
            });
        }
    }
})();
