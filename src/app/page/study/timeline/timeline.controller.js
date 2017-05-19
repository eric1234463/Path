(function() {
    'use strict';

    angular
        .module('app.main.study')
        .controller('TimelineController', TimelineController);

    /* @ngInject */
    function TimelineController (StudyService) {
        var vm = this;

        StudyService.getTimeLine().then(function(response) {
            vm.events = response.data;
        });

    }
    
})();
