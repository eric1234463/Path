(function() {
    'use strict';

    angular
        .module('app.main.live')
        .config(moduleConfig);

    function moduleConfig($stateProvider, triMenuProvider) {

        $stateProvider
            .state('triangular.viewchoice', {
                url: '/viewchoice/',
                data: {
                    layout: {
                        showToolbar: true
                    },
                    permissions: {
                        only: ['live']
                    }
                },
                templateUrl: 'app/page/live/viewchoice/viewchoice.html',
                controller: 'ViewChoiceController',
                controllerAs: 'vm'
            })

            .state('triangular.newchoice', {
                url: '/newchoice/',
                data: {
                    layout: {
                        showToolbar: true
                    },
                    permissions: {
                        only: ['live']
                    }
                },
                templateUrl: 'app/page/live/newchoice/newchoice.html',
                controller: 'NewChoiceController',
                controllerAs: 'vm'
            });

        triMenuProvider.addMenu({
            name: 'Live Statistics',
            icon: 'zmdi zmdi-time-countdown',
            priority: 4,
            type: 'dropdown',
            permission: 'live',
            children: [{
                name: 'Share Your Choice',
                icon: 'zmdi zmdi-assignment-check',
                permission: 'share your choice',
                state: 'triangular.newchoice',
                type: 'link'
            }, {
                name: 'View People Choices',
                icon: 'zmdi zmdi-eye',
                permission: 'view people choices',
                state: 'triangular.viewchoice',
                type: 'link'
            }]
        });

    }
})();
