(function() {
    'use strict';

    angular
        .module('app.main.landing')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider) {
        $stateProvider
            .state('landing', {
                url: '/landing',
                views: {
                    'root': {
                        templateUrl: 'app/page/landing/landing.html',
                        controller: 'LandingController',
                        controllerAs: 'vm',
                    }
                }
            })
    }
})();
