(function() {
    'use strict';

    angular
        .module('app.main.authentication')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, triMenuProvider) {

        $stateProvider
        .state('authentication', {
            abstract: true,
            views: {
                'root': {
                    templateUrl: 'app/page/authentication/layouts/authentication.tmpl.html'
                }
            }
        })
        .state('authentication.login', {
            url: '/login',
            templateUrl: 'app/page/authentication/login/login.tmpl.html',
            controller: 'LoginController',
            controllerAs: 'vm'
        })
        .state('authentication.signup', {
            url: '/signup',
            templateUrl: 'app/page/authentication/signup/signup.tmpl.html',
            controller: 'SignupController',
            controllerAs: 'vm'
        })
        .state('authentication.lock', {
            url: '/lock',
            templateUrl: 'app/page/authentication/lock/lock.tmpl.html',
            controller: 'LockController',
            controllerAs: 'vm'
        })
        .state('authentication.forgot', {
            url: '/forgot',
            templateUrl: 'app/page/authentication/forgot/forgot.tmpl.html',
            controller: 'ForgotController',
            controllerAs: 'vm'
        })
        .state('triangular.profile', {
            url: '/profile',
            templateUrl: 'app/page/authentication/profile/profile.tmpl.html',
            controller: 'ProfileController',
            controllerAs: 'vm'
        })
        .state('authentication.logout', {
            url: '/logout',
            controller: 'LogoutController',
            controllerAs: 'vm'
        });

        triMenuProvider.addMenu({
            name: 'Logout',
            icon: 'zmdi zmdi-sign-in',
            priority: 9,
            type: 'link',
            state: 'authentication.logout'
        });
    }
})();
