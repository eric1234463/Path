(function() {
    'use strict';

    angular
        .module('app.main.mentorship')
        .controller('EventDialogController', EventDialogController);

    /* @ngInject */
    function EventDialogController($scope, $mdDialog, $filter, triTheming, dialogData, event, edit, MentorshipService) {

        var vm = this;
        vm.cancelClick = cancelClick;
        vm.colors = [];
        vm.colorChanged = colorChanged;
        vm.deleteClick = deleteClick;
        vm.dialogData = dialogData;
        vm.edit = edit;
        vm.event = event;
        vm.okClick = okClick;
        vm.selectedColor = null;
        // create start and end date of event
        vm.start = event.start.toDate();
        vm.startTime = convertMomentToTime(event.start);

        if(event.end !== null) {
            vm.end = event.end.toDate();
            vm.endTime = convertMomentToTime(event.end);
        }

        ////////////////

        function colorChanged() {
            vm.event.backgroundColor = vm.selectedColor.backgroundColor;
            vm.event.borderColor = vm.selectedColor.backgroundColor;
            vm.event.textColor = vm.selectedColor.textColor;
            vm.event.palette = vm.selectedColor.palette;
        }

        function okClick() {
            vm.event.start = updateEventDateTime(vm.start, vm.startTime);
            if(vm.event.end !== null) {
                vm.event.end = updateEventDateTime(vm.end, vm.endTime);
            }
            $mdDialog.hide(vm.event);
            MentorshipService.updateMeeting(vm.event);
        }

        function cancelClick() {
            $mdDialog.cancel();
        }

        function deleteClick() {
            vm.event.deleteMe = true;
            $mdDialog.hide(vm.event);
             MentorshipService.deleteMeeting(vm.event);
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
                hours: ['08','09','10','11','12','13','14','15','16','17','18'],
                minutes: ['00','30']
            };
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

            if(index === vm.event.palette) {
                vm.selectedColor = color;
                vm.colorChanged();
            }
        });
    }
})();
