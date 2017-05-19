(function() {
    'use strict';

    angular
        .module('app')
        .config(translateConfig);

    /* @ngInject */
    function translateConfig(triSettingsProvider, triRouteProvider,triSkinsProvider) {
        var now = new Date();
        
        // set app name & logo (used in loader, sidemenu, footer, login pages, etc)
        triSettingsProvider.setName('Path');
        triSettingsProvider.setCopyright('&copy;' + now.getFullYear() + ' path.com');
        triSettingsProvider.setLogo('assets/images/path2.png');
        // set current version of app (shown in footer)
        triSettingsProvider.setVersion('2.12.0');
        triSettingsProvider.setSkin('Student');
        // set the document title that appears on the browser tab
        triRouteProvider.setTitle('Path');
        triRouteProvider.setSeparator('|');

    }
})();
