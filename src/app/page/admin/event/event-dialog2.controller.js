(function() {
    'use strict';

    angular
        .module('app.main.mentorship')
        .controller('EventDialog2Controller', EventDialog2Controller);

    /* @ngInject */
    function EventDialog2Controller($scope, $mdDialog, $filter, triTheming, dialogData, event, edit, MentorshipService, AdminService, SignUpService) {

        var vm = this;
        vm.cancelClick = cancelClick;
        vm.colors = [];
        vm.colorChanged = colorChanged;
        vm.deleteClick = deleteClick;
        vm.dialogData = dialogData;
        vm.edit = edit;
        vm.event = event;
        vm.okClick = okClick;
        vm.copy = copy;
        vm.schoolList = SignUpService;
        vm.selectedColor = null;
        // create start and end date of event
        vm.start = event.start.toDate();
        vm.startTime = convertMomentToTime(event.start);
        console.log(vm.start);

        if (event.end !== null) {
            vm.end = event.end.toDate();
            vm.endTime = convertMomentToTime(event.end);
        }

        ////////////////

        copy();

        SignUpService.getSchoolList().then(function(response) {
            vm.schoolList = response.data;
        });

        function copy() {
            vm.id = vm.event.meetingID;
            vm.title = vm.event.title;
            vm.number = vm.event.number;
            vm.startDate = vm.start;
            vm.endDate = vm.end;
            vm.grpmate = vm.event.grpmate;
            vm.school = vm.event.school;
            vm.content = vm.event.description;
        }



        function recover() {
            vm.event.meetingID = vm.id;
            vm.event.title = vm.title;
            vm.event.number = vm.number;
            vm.start = vm.startDate;
            vm.end = vm.endDate;
            vm.event.grpmate = vm.grpmate;
            vm.event.description = vm.content;
        }



        function colorChanged() {
            vm.event.backgroundColor = vm.selectedColor.backgroundColor;
            vm.event.borderColor = vm.selectedColor.backgroundColor;
            vm.event.textColor = vm.selectedColor.textColor;
            vm.event.palette = vm.selectedColor.palette;
        }

        function okClick() {
            copy();
            vm.startDate = moment(vm.startDate).format('YYYY-MM-DD');
            vm.endDate = moment(vm.endDate).format('YYYY-MM-DD');
            //vm.title, vm.number, vm.startDate, vm.endDate, vm.content, vm.location, vm.event.meetingID
            AdminService.updateActivity(vm.title, vm.number, vm.startDate, vm.endDate, vm.content, vm.grpmate, vm.event.meetingID, vm.school)
            copy();
            $mdDialog.cancel();
        }

        function cancelClick() {
            recover();
            $mdDialog.cancel();
        }

        function deleteClick() {
            console.log(vm.event.meetingID);
            AdminService.deleteActivity(vm.event.meetingID)

            $mdDialog.cancel();
        }

        function convertMomentToTime(moment) {
            var hour = moment.format("HH");
            var min = moment.format("mm");

            return {
                hour: hour,
                minute: min
            };
        }

        function updateEventDateTime(date, time) {
            var newDate = moment(date);
            newDate.hour(time.hour);
            newDate.minute(time.minute);
            return newDate;
        }

        function createDateSelectOptions() {
            // create options for time select boxes (this will be removed in favor of mdDatetime picker when it becomes available)
            vm.dateSelectOptions = {
                hours: [],
                minutes: []
            };
            // hours
            for (var hour = 0; hour <= 23; hour++) {
                vm.dateSelectOptions.hours.push(hour);
            }
            // minutes
            for (var minute = 0; minute <= 59; minute++) {
                vm.dateSelectOptions.minutes.push(minute);
            }
        }

        // init
        createDateSelectOptions();

        // create colors
        angular.forEach(triTheming.palettes, function(palette, index) {
            var color = {
                name: index.replace(/-/g, ' '),
                palette: index,
                backgroundColor: triTheming.rgba(palette['500'].value),
                textColor: triTheming.rgba(palette['500'].contrast)
            };

            vm.colors.push(color);

            if (index === vm.event.palette) {
                vm.selectedColor = color;
                vm.colorChanged();
            }
        });
    }
})();
