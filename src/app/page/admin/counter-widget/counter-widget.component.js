(function() {
    'use strict';

    angular
        .module('app.main.admin')
        .component('counterWidget', {
            templateUrl: 'app/page/admin/counter-widget/counter-widget.tmpl.html',
            controllerAs: 'vm',
            bindings: {
                title: '@',
                count: '<',
                icon: '@',
                background: '@',
                color: '@'
            }
        });
})();
