(function() {
    'use strict';

    angular
        .module('app.main.admin')
        .controller('AdminAnalysisController', AdminAnalysisController);

    function AdminAnalysisController(AdminService) {
        var vm = this;

        AdminService.getStudent().then(function(response) {
            vm.studentCount = response.data.StudentCount;
        });
        AdminService.getCase().then(function(response) {
            vm.caseCount = response.data.CaseCount;
        });
        AdminService.getMentor().then(function(response) {
            vm.mentorCount = response.data.MentorCount;
        });
        AdminService.getView().then(function(response) {
            vm.viewCount = response.data.ViewCount;
        });

        AdminService.getLog().then(function(response) {
            vm.logList = response.data;
        });
    }

})();
