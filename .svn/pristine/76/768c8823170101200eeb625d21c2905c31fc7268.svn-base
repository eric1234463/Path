(function() {
    'use strict';

    angular
        .module('app.main.authentication')
        .controller('ProfileController', ProfileController);

    /* @ngInject */
    function ProfileController(AccountService, $localStorage, $mdDialog, Upload, $timeout, $scope) {
        var vm = this;
        vm.editMode = false;
        vm.save = true;
        vm.myData = [];
        vm.inData = '';
        vm.editON = editON;
        vm.editOFF = editOFF;
        vm.add = add;
        vm.del = del;
        vm.upDate = upDate;
        vm.updatePassword = updatePassword;
        vm.currentUser = $localStorage.currentUser;
        vm.uploadPic = uploadPic;
        vm.currentUser.skills = $localStorage.currentUser.skills;
        vm.username = vm.currentUser.displayName;
        vm.CGPA = vm.currentUser.cgpa;
        vm.upload = vm.upload;
        console.log(vm.currentUser);

        function updatePassword() {
            var passwordCheck = AccountService.checkPassword(vm.currentUser.accountID, vm.user.password);
            passwordCheck.then(function(response) {
                if (response.data.status == 'true') {
                    $mdDialog.show(
                        $mdDialog.confirm()
                        .title('Password Error')
                        .textContent('Password no change')
                        .ok('Ok')
                    );
                } else {
                    AccountService.updatePassword(vm.currentUser.accountID, vm.user.password).then(function() {
                        $mdDialog.show(
                            $mdDialog.confirm()
                            .title('Update Success')
                            .textContent('You Already Update The password')
                            .ok('Ok')
                        );
                    });
                }
            });
        }
        function upload($file){
            $scope.picFile = $file;
        }
        function add() {
            if (vm.currentUser.skills == null)
                vm.currentUser.skills = [];
            vm.currentUser.skills.push(vm.inData);
            vm.inData = '';
        }

        function del(selData) {
            vm.currentUser.skills.splice(vm.currentUser.skills.indexOf(selData), 1);
        }


        function editON() {
            vm.editMode = true;
            vm.save = false;
        }

        function editOFF() {
            vm.editMode = false;
            vm.save = true;
            vm.username = vm.currentUser.displayName;
            vm.CGPA = vm.currentUser.cgpa;
        }

        function upDate() {
            vm.editMode = false;
            vm.save = true;
            $localStorage.currentUser.displayName = vm.username;
            vm.currentUser.displayName = vm.username;
            $localStorage.currentUser.cgpa = vm.CGPA;
            vm.currentUser.cgpa = vm.CGPA;
            AccountService.updatePersonalInfo(vm.currentUser.accountID, vm.username, vm.CGPA, vm.currentUser.skills)
            $mdDialog.show(
                $mdDialog.alert()
                .title('Update Success')
                .textContent('You Already Update the Personal Information!')
                .ok('Ok')
            );
        }

        function uploadPic(file) {
            Upload.upload({
                url: 'http://unicomhk.net/path2/php/account.php?action=uploadIcon',
                method: 'POST',
                data: {
                    'userID': vm.currentUser.accountID,
                    file: file,
                    'targetPath': '../img/avatar/',
                },
            }).then(function(response) {
                if(response.data != ""){
                    file.result = response.data;
                    $localStorage.currentUser.avatar = response.data;
                    vm.currentUser.avatar = response.data;
                } else {
                    $mdDialog.show(
                        $mdDialog.alert()
                        .title('Error')
                        .textContent('File type not accept!')
                        .ok('Ok')
                    );
                }
            });
        }
    }
})();
