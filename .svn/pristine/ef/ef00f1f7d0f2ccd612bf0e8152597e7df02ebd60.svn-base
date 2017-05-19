(function() {
    'use strict';

    angular
        .module('app.main.study')
        .config(moduleConfig)
        .constant('CHAT_ROUTES', [{
            state: 'triangular.messaging',
            name: 'Messaging',
            url: '/messaging'
        }]);

    /* @ngInject */
    function moduleConfig($stateProvider, triMenuProvider, CHAT_ROUTES) {

        $stateProvider
            .state('triangular.timeline', {
                url: '/timeline',
                data: {
                    permissions: {
                        only: ['study']
                    }
                },
                templateUrl: 'app/page/study/timeline/timeline.html',
                controller: 'TimelineController',
                controllerAs: 'vm'
            })

            .state('triangular.event', {
                url: '/event',
                data: {
                    permissions: {
                        only: ['study']
                    }
                },
                templateUrl: 'app/page/study/event/event.html',
                controller: 'ActController',
                controllerAs: 'vm'
            })

            .state('triangular.GrpResult', {
                url: '/GrpResult/:grpID',
                data: {
                    permissions: {
                        only: ['study']
                    }
                },
                templateUrl: 'app/page/study/GrpResult/GrpResult.html',
                controller: 'GrpController',
                controllerAs: 'vm',
            })
            
            .state('triangular.messaging', {
                url: '/messaging',
                templateUrl: 'app/page/study/messaging/messaging.html',
                controller: 'MessagingController',
                controllerAs: 'vm',
                data: {
                    layout: {
                        footer: false,
                        contentClass: 'triangular-non-scrolling'
                    },
                permissions: {
                    only: ['viewEmail']
                    }
                }
            })
            .state('triangular.messaging.chat', {
                url: '/:chatID',
                templateUrl: 'app/page/study/messaging/messaging.chat.html',
                controller: 'ChatController',
                controllerAs: 'vm',
                resolve: {
                    returnChat: function($stateParams) {
                        return $stateParams.chatID;
                    },

                    accountImg: function($stateParams) {
                        return $stateParams.icon;
                    }
                },
                    onEnter: function($state, returnChat){
                    if (returnChat <= 0) {
                        $state.go('triangular.messaging.chat');
                    }
                }
            });

            

        triMenuProvider.addMenu({
            name: 'Prepare For Study',
            icon: 'fa fa-book',
            type: 'dropdown',
            priority: 2,
            permission: 'study',
            children: [{
                name: 'Non-JUPAS Timeline',
                icon: 'zmdi zmdi-time',
                permission: 'non-jupas timeline',
                state: 'triangular.timeline',
                type: 'link'
            },

            {
                name: 'Messaging',
                icon: 'zmdi zmdi-comments',
                permission: 'messaging',
                state: 'triangular.messaging',
                type: 'link'
            },

            {
                name: 'Event',
                icon: 'zmdi zmdi-widgets',
                permission: 'event',
                state: 'triangular.event',
                type: 'link'
            },
            ]
        });
    }
})();
