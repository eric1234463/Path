(function() {
    'use strict';

    angular
        .module('app.main.analysis')
        .controller('SuccessCaseController', SuccessCaseController);

    function SuccessCaseController($scope, AnalysisService) {
        var vm = this;
       
       vm.columns = [{
            title: 'Category',
            field: 'Category',
            sortable: true,
        },{
            title: 'offerDate',
            field: 'offerDate',
            sortable: false
        },{
            title: 'ProgrammeName',
            field: 'ProgrammeName',
            sortable: false
        },{
            title: 'OfferUniversity',
            field: 'OfferUniversity',
            sortable: false
        },{
            title: 'OfferProgramme',
            field: 'OfferProgramme',
            sortable: false
        },{
            title: 'DSEFullCert',
            field: 'DSEFullCert',
            sortable: false
        },{
            title: 'OfferUniversity',
            field: 'OfferUniversity',
            sortable: false
        },{
            title: 'sem1GPA',
            field: 'sem1GPA',
            sortable: false
        },{
            title: 'sem2GPA',
            field: 'sem2GPA',
            sortable: false
        },{
            title: 'sem3GPA',
            field: 'sem3GPA',
            sortable: false
        },{
            title: 'sem4GPA',
            field: 'sem4GPA',
            sortable: false
        },{
            title: 'CGPA',
            field: 'CGPA',
            sortable: false
        },{
            title: 'itelts',
            field: 'itelts',
            sortable: false
        },{
            title: 'offerType',
            field: 'offerType',
            sortable: false
        }];

        function getSuccessCase() {
            AnalysisService.getSuccessCase().then(function(response) {
                vm.schoolList = response.data;
            });
        }
        getSuccessCase();
    }
})();
