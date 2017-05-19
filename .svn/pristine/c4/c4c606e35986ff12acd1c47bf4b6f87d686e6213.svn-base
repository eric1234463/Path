(function() {
    'use strict';

    angular
        .module('app.main.dashboards')
        .config(moduleConfig);

    function moduleConfig($stateProvider, triMenuProvider) {

        $stateProvider
            .state('triangular.dashboard', {
                url: '/dashboards/',
                data: {
                    layout: {
                        showToolbar: true
                    }
                },
                templateUrl: 'app/page/home/dashboards/dashboard.html',
                controller: 'DashboardController',
                controllerAs: 'vm'
            });


        triMenuProvider.addMenu({
            name: 'Home',
            icon: 'zmdi zmdi-home',
            priority: 1,
            type: 'link',
            state: 'triangular.dashboard'
        });

    }
})();
