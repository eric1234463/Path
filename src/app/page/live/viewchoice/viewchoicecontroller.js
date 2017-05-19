(function() {
    'use strict';
    angular
        .module('app.main.live')
        .controller('ViewChoiceController', ViewChoiceController);

    function ViewChoiceController(LiveService) {
        var vm = this;

        vm.columns = [{
            title: 'Program Name',
            field: 'programName',
            sortable: true,
        }, {
            title: 'Number of People Choosed',
            field: 'choiceCount',
            sortable: true
        }, {
            title: 'Average of CGPA',
            field: 'avgGpa',
            sortable: true
        }, {
            title: 'Upper Quartile of CGPA',
            field: 'q3Gpa',
            sortable: true
        }, {
            title: 'Lower Quartile of CGPA',
            field: 'q1Gpa',
            sortable: true
        }, {
            title: 'DSE Overall',
            field: 'dse',
            sortable: true
        }, {
            title: 'Standard Deviation',
            field: 'sd',
            sortable: true
        }];
        LiveService.getChoiceList().then(function(response) {
            vm.schoolList = response.data;
        });
    }
})();
