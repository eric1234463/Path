(function() {
    'use strict';

    angular
        .module('app.main.mentorship')
        .controller('AppointmentController', AppointmentController);

    function AppointmentController(MentorshipService, $localStorage, $filter, $mdDialog) {

        var vm = this;
        vm.student = $localStorage.currentUser;

        vm.create = create;
        vm.date = '';

        vm.appointment = {
            'sID': vm.student.accountID,
            'mID': vm.student.mentor,
            'date': '',
            'time': '',
            'msg': ''
        };

        vm.timings = ['8:00', '9:00', '10:00', '11:00', '12:00',
            '13:00', '14:00', '15:00', '16:00', '17:00'
        ];

        function create() {
            vm.appointment.date = $filter('date')(new Date(vm.date), 'yyyy-MM-dd');
            MentorshipService.joinMeeting(vm.appointment).then(function(response) {
                if (response.data == 0) { //create appoint
                    MentorshipService.mkAppointment(vm.appointment).then(function(response) {
                        if (response.data == 1) {
                            MentorshipService.sdMsg(vm.student.accountID, vm.student.mentor, 2);
                            $mdDialog.show(
                                $mdDialog.alert()
                                .title('Create Appointment Success')
                                .textContent('Thank You')
                                .ok('Ok')
                            );
                        } else {
                            $mdDialog.show(
                                $mdDialog.alert()
                                .title('Create Appointment Fail')
                                .textContent('You have already make appointment')
                                .ok('Ok')
                            );
                        }
                    });
                } else if (response.data == 1) { //join meeting
                    broadcastMsg();
                    $mdDialog.show(
                        $mdDialog.alert()
                        .title('Meeting Exists')
                        .textContent('You join into the meeting')
                        .ok('Ok')
                    );
                } else {
                    $mdDialog.show(
                        $mdDialog.alert()
                        .title('Error')
                        .textContent('You already joined the meeting')
                        .ok('Ok')
                    );
                }
            });
        };

        function broadcastMsg() {
            MentorshipService.getMeetingInfo(vm.student.accountID).then(function(response) {
                var participant = response.data.participant;
                for (var i = 0; i < participant.length; i++) {
                    if (participant[i].id == vm.student.accountID) {
                        participant[i].id = vm.student.mentor;
                    }
                    MentorshipService.sdMsg(vm.student.accountID, participant[i].id, 4);
                }
            });
        }
    }

})();
