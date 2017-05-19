(function() {
    'use strict';

    angular
        .module('app', [
            'ui.router',
            'triangular',
            'ngAnimate', 'ngCookies', 'ngSanitize', 'ngMessages', 'ngMaterial',
            'googlechart', 'chart.js', 'linkify',
            'ui.calendar', 'angularMoment', 'textAngular',
            'uiGmapgoogle-maps', 'hljs', 'md.data.table', angularDragula(angular), 'ngFileUpload', 'nvd3',
            'app.main', 
            'app.translate','ui.bootstrap','ngStorage','pdf','pdfjsViewer','wt.responsive'

        ]).config(function($sceDelegateProvider) {
             $sceDelegateProvider.resourceUrlWhitelist([
                'self',
                'http://unicomhk.net/**'
            ])
        })

    // set a constant for the API we are connecting to
    .constant('API_CONFIG', {
        'url': 'http://triangular-api.oxygenna.com/'
    })
})();
