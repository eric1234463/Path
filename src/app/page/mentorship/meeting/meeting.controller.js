(function() {
    'use strict';

    angular
        .module('app.main.mentorship')
        .controller('MeetingController', MeetingController);

    function MeetingController(MentorshipService, $localStorage) {

    	var vm = this;
        vm.currentUser = $localStorage.currentUser;
        vm.mentor = $localStorage.mentor;

        

    	function getMeetingInfo(sID) {
       	    MentorshipService.getMeetingInfo(sID).then(function(response) {
                vm.meeting = response.data;
                console.log(vm.meeting);
       	    });
    	}

        getMeetingInfo(vm.currentUser.accountID);
    }

})();