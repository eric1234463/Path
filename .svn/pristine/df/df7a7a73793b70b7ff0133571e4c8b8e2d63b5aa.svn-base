(function() {
    'use strict';

    angular
        .module('app.main.analysis')
        .config(moduleConfig);

    function moduleConfig($stateProvider, triMenuProvider) {

        $stateProvider
            .state('triangular.successcase', {
                url: '/successcase/',
                data: {
                    layout: {
                        showToolbar: true
                    },
                    permissions: {
                        only: ['analysis']
                    }
                },
                templateUrl: 'app/page/analysis/successcase/successcase.html',
                controller: 'SuccessCaseController',
                controllerAs: 'vm'
            })

        .state('triangular.createcase', {
            url: '/createcase/',
            data: {
                layout: {
                    showToolbar: true
                },
                permissions: {
                    only: ['analysis']
                }
            },
            templateUrl: 'app/page/analysis/createcase/createcase.html',
            controller: 'CreateCaseController',
            controllerAs: 'vm'
        });


        triMenuProvider.addMenu({
            name: 'Analysis',
            icon: 'fa fa-search',
            priority: 3,
            type: 'dropdown',
            permission: 'analysis',
            children: [{
                name: 'Share Your Case',
                icon: 'zmdi zmdi-assignment-check',
                permission: 'share your case',
                state: 'triangular.createcase',
                type: 'link'
            }, {
                name: 'View Previous Case',
                icon: 'zmdi zmdi-eye',
                permission: 'view previous case',
                state: 'triangular.successcase',
                type: 'link'
            }]
        });

    }
})();
