(function() {
    'use strict';

    angular
        .module('app.main.admin')
        .controller('EventController', EventController);

    function EventController(AdminService, $mdDialog, $filter, triTheming, $mdToast, triLayout, SignUpService) {
        var vm = this;
        vm.editMode = false;
        vm.save = save;
        vm.editOn = editOn;
        vm.editOff = editOff;
        vm.startTime = "08:00";
        vm.endTime = "21:00";
        vm.school = "";
        vm.schoolList = SignUpService;
        vm.event = {
            subject: '',
            grpmate: '',
            startDate: "",
            endDate: "",
            content: '',
            numOfPe: '',
            password: '',
            confirm: '',
            school: ''
        };
        vm.eventSources = [{
            events: []
        }];

         vm.calendarOptions = {
            contentHeight: 'auto',
            selectable: true,
            editable: true,
            viewRender: function(view) {
                // change day
                vm.currentDay = view.calendar.getDate();
                // update background image for month
                triLayout.layout.contentClass = 'calendar-background-image overlay-gradient-10 calendar-background-month-' + vm.currentDay.month();
            },

            dayClick: function(date, jsEvent, view) { //eslint-disable-line
                vm.currentDay = date;
            },

            eventClick: function(calEvent, jsEvent, view) { //eslint-disable-line
                $mdDialog.show({
                        controller: 'EventDialog2Controller',
                        controllerAs: 'vm',
                        templateUrl: 'app/page/admin/event/event-dialog2.html',
                        targetEvent: jsEvent,
                        focusOnOpen: false,
                        locals: {
                            dialogData: {
                                title: 'Edit Meeting',
                                confirmButtonText: 'Save'
                            },
                            event: calEvent,
                            edit: true
                        }
                    })
                    .then(function(event) {
                        var toastMessage = 'Event Updated';
                        if (angular.isDefined(event.deleteMe) && event.deleteMe === true) {
                            // remove the event from the calendar
                            uiCalendarConfig.calendars['triangular-calendar'].fullCalendar('removeEvents', event._id);
                            // change toast message
                            toastMessage = 'Event Deleted';
                        } else {
                            // update event
                            uiCalendarConfig.calendars['triangular-calendar'].fullCalendar('updateEvent', event);
                        }

                        // pop a toast
                        $mdToast.show(
                            $mdToast.simple()
                            .content($filter('triTranslate')(toastMessage))
                            .position('bottom right')
                            .hideDelay(2000)
                        );
                    });
            }
        };





        getAllMeeting();
        


        
        
        SignUpService.getSchoolList().then(function(response) {
            vm.schoolList = response.data;
        });


        function getAllMeeting() {
            AdminService.getActivity().then(function(response) {
                vm.meetings = '';
                vm.eventSources[0].events.length = 0;
                vm.meetings = response.data;
                
                for (var i = 0; i <= vm.meetings.length; i++) {
                    var dateobj = vm.meetings[i].startDate;
                    var dateobj2 = vm.meetings[i].endDate;
                    var randomPalette = pickRandomProperty(triTheming.palettes);
                    //var inAnHour = moment(dateobj).add(1, 'h');
                    var inAnHour = moment(dateobj2).add(1, 'h');
                    vm.eventSources[0].events.push({
                        meetingID: vm.meetings[i].id,
                        title: vm.meetings[i].name,
                        number: vm.meetings[i].number,
                        start: moment(dateobj),
                        end: inAnHour,
                        grpmate: vm.meetings[i].grpmate,
                        school: vm.meetings[i].school,
                        description: vm.meetings[i].content,
                        backgroundColor: triTheming.rgba(triTheming.palettes[randomPalette]['500'].value),
                        borderColor: triTheming.rgba(triTheming.palettes[randomPalette]['500'].value),
                        textColor: triTheming.rgba(triTheming.palettes[randomPalette]['500'].contrast),
                        palette: randomPalette
                    });
                }
            });
        }



        function pickRandomProperty(obj) {
            var result;
            var count = 0;
            for (var prop in obj) {
                if (Math.random() < 1 / ++count) {
                    result = prop;
                }
            }
            return result;
        }



        function editOn() {
            vm.editMode = true;
        }

        function editOff() {
            vm.editMode = false;
            vm.event.subject = '';
            vm.event.content = '';
            vm.event.numOfPe = '';
            vm.event.startDate = '';
            vm.event.endDate = '';
        }

        function save() {
           vm.editMode = false;
           vm.event.startDate = moment(vm.event.startDate).format('YYYY-MM-DD');
           vm.event.endDate = moment(vm.event.endDate).format('YYYY-MM-DD');
           AdminService.createActivity(vm.event.subject, vm.event.numOfPe, vm.event.startDate, vm.event.endDate, vm.event.content, vm.event.grpmate, vm.event.school)
           $mdDialog.show(
                $mdDialog.alert()
                .title('Create Success')
                .textContent('You Already Create the event!')
                .ok('Ok')
            );
           getAllMeeting();
        }

       



    }

})();
