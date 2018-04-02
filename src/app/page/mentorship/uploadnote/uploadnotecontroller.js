(function() {
    'use strict';

    angular
        .module('app.main.mentorship')
        .controller('UploadNoteController', UploadNoteController);

    function UploadNoteController(MentorshipService, $localStorage, Upload) {
        var vm = this;
        vm.upload = upload;
        vm.submit = submit;

        function upload($files) {
            vm.file = $files;
        }

        function submit() {
            console.log(vm.file);
            Upload.upload({
                url: 'http://erickwong.hk/path2/php/mentorship.php?action=uploadNote',
                method: 'POST',
                data: {
                    'noteName': vm.noteName,
                    'noteDesc': vm.noteDesc,
                    'mentorID': $localStorage.currentUser.accountID,
                    file: vm.file,
                    'targetPath': '../pdf/',
                },
            });
        }
    }
})();
