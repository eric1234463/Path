(function() {
    'use strict';

    angular
        .module('app')
        .config(config);

    /* @ngInject */
    function config(ChartJsProvider) {
        // Configure all charts to use material design colors
        ChartJsProvider.setOptions({
            colours: [
                '#0D47A1',    // blue
                '#B71C1C',    // red
                '#F57F17',    // yellow
                '#1B5E20',    // green
                '#311B92',    // purple
                '#01579B',    // light blue
                '#E65100',    // orange
                '#FF6F00',    // browny yellow
                '#1A237E'     // dark blue
            ],
            responsive: true
        });
    }
})();