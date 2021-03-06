(function() {
    'use strict';

    angular
        .module('app')
        .config(themesConfig);

    /* @ngInject */
    function themesConfig($mdThemingProvider, triThemingProvider, triSkinsProvider) {
        /**
         *  PALETTES
         */
        $mdThemingProvider.definePalette('white', {
            '50': 'ffffff',
            '100': 'ffffff',
            '200': 'ffffff',
            '300': 'ffffff',
            '400': 'ffffff',
            '500': 'ffffff',
            '600': 'ffffff',
            '700': 'ffffff',
            '800': 'ffffff',
            '900': 'ffffff',
            'A100': 'ffffff',
            'A200': 'ffffff',
            'A400': 'ffffff',
            'A700': 'ffffff',
            'contrastDefaultColor': 'dark'
        });

        $mdThemingProvider.definePalette('black', {
            '50': 'e1e1e1',
            '100': 'b6b6b6',
            '200': '8c8c8c',
            '300': '646464',
            '400': '3a3a3a',
            '500': 'e1e1e1',
            '600': 'e1e1e1',
            '700': '232323',
            '800': '1a1a1a',
            '900': '121212',
            'A100': '3a3a3a',
            'A200': 'ffffff',
            'A400': 'ffffff',
            'A700': 'ffffff',
            'contrastDefaultColor': 'light'
        });

        var triCyanMap = $mdThemingProvider.extendPalette('cyan', {
            'contrastDefaultColor': 'light',
            'contrastLightColors': '500 700 800 900',
            'contrastStrongLightColors': '500 700 800 900'
        });

        // Register the new color palette map with the name triCyan
        $mdThemingProvider.definePalette('triCyan', triCyanMap);


        /**
         *  SKINS
         */

        // CYAN CLOUD SKIN
        triThemingProvider.theme('cyan')
            .primaryPalette('triCyan')
            .accentPalette('amber')
            .warnPalette('deep-orange');

        triThemingProvider.theme('cyan-white')
            .primaryPalette('white')
            .accentPalette('triCyan', {
                'default': '500'
            })
            .warnPalette('deep-orange');

        triSkinsProvider.skin('cyan-cloud', 'Cyan Cloud')
            .sidebarTheme('cyan')
            .toolbarTheme('cyan')
            .logoTheme('cyan')
            .contentTheme('cyan');


        // RED DWARF SKIN
        triThemingProvider.theme('red')
            .primaryPalette('red')
            .accentPalette('amber')
            .warnPalette('purple');

        triThemingProvider.theme('white-red')
            .primaryPalette('white')
            .accentPalette('red', {
                'default': '500'
            })
            .warnPalette('purple');

        triSkinsProvider.skin('red-dwarf', 'Red Dwarf')
            .sidebarTheme('red')
            .toolbarTheme('red')
            .logoTheme('red')
            .contentTheme('red');

        // PLUMB PURPLE SKIN
        triThemingProvider.theme('purple')
            .primaryPalette('purple')
            .accentPalette('deep-orange')
            .warnPalette('amber');

        triThemingProvider.theme('white-purple')
            .primaryPalette('white')
            .accentPalette('purple', {
                'default': '400'
            })
            .warnPalette('deep-orange');

        triSkinsProvider.skin('plumb-purple', 'Plumb Purple')
            .sidebarTheme('purple')
            .toolbarTheme('white-purple')
            .logoTheme('purple')
            .contentTheme('purple');

        // DARK KNIGHT SKIN
        triThemingProvider.theme('dark')
            .primaryPalette('black', {
                'default': '300',
                'hue-1': '400'
            })
            .accentPalette('amber')
            .warnPalette('deep-orange')
            .backgroundPalette('black')
            .dark();

        triSkinsProvider.skin('dark-knight', 'Dark Knight')
            .sidebarTheme('dark')
            .toolbarTheme('dark')
            .logoTheme('dark')
            .contentTheme('dark');

        // BATTLESHIP GREY SKIN
        triThemingProvider.theme('blue-grey')
            .primaryPalette('blue-grey')
            .accentPalette('amber')
            .warnPalette('orange');

        triThemingProvider.theme('white-blue-grey')
            .primaryPalette('white')
            .accentPalette('blue-grey', {
                'default': '400'
            })
            .warnPalette('orange');

        triSkinsProvider.skin('battleship-grey', 'Battleship Grey')
            .sidebarTheme('blue-grey')
            .toolbarTheme('white-blue-grey')
            .logoTheme('blue-grey')
            .contentTheme('blue-grey');

        // ZESTY ORANGE SKIN
        triThemingProvider.theme('orange')
            .primaryPalette('orange', {
                'default': '800'
            })
            .accentPalette('lime')
            .warnPalette('amber');

        triThemingProvider.theme('white-orange')
            .primaryPalette('white')
            .accentPalette('orange', {
                'default': '500'
            })
            .warnPalette('lime');

        triSkinsProvider.skin('zesty-orange', 'Zesty Orange')
            .sidebarTheme('orange')
            .toolbarTheme('white-orange')
            .logoTheme('orange')
            .contentTheme('orange');


        // INDIGO ISLAND SKIN
        triThemingProvider.theme('indigo')
            .primaryPalette('indigo', {
                'default': '600'
            })
            .accentPalette('red')
            .warnPalette('lime');

        triSkinsProvider.skin('indigo-island', 'Indigo Island')
            .sidebarTheme('indigo')
            .toolbarTheme('indigo')
            .logoTheme('indigo')
            .contentTheme('indigo');

        // KERMIT GREEN SKIN
        triThemingProvider.theme('light-green')
            .primaryPalette('light-green', {
                'default': '200'
            })
            .accentPalette('amber')
            .warnPalette('deep-orange');

        triThemingProvider.theme('white-light-green')
            .primaryPalette('white')
            .accentPalette('light-green', {
                'default': '200'
            })
            .warnPalette('deep-orange');
        triSkinsProvider.skin('kermit-green', 'Kermit Green')
            .sidebarTheme('light-green')
            .toolbarTheme('light-green')
            .logoTheme('light-green')
            .contentTheme('light-green');

		//---------------------------------------------------------------------------------------
		//-----Normal user
	    // Lawrence Skin --Part1
        triThemingProvider.theme('Lawrence_blue_200')
        .primaryPalette('blue' , {
            'default': '200'
        })
        .accentPalette('blue')
        .warnPalette('deep-orange');

		// Lawrence Skin --Part2
        triThemingProvider.theme('Lawrence_blue_100')
        .primaryPalette('blue', {
            'default': '50'
        })
        .accentPalette('blue', {
            'default': '300'
        })
        .warnPalette('deep-orange');

		// Lawrence Setting
        triSkinsProvider.skin('Student', 'Student')
        .sidebarTheme('Lawrence_blue_100')
        .toolbarTheme('Lawrence_blue_200')
        .logoTheme('Lawrence_blue_200')
        .contentTheme('Lawrence_blue_200');	
		//---------------------------------------------------------------------------------------
		//-----Mentor user
	    // Mentor Skin --Part1
        triThemingProvider.theme('Mentor_deep-purple_200')
        .primaryPalette('deep-purple' , {
            'default': '200'
        })
        .accentPalette('deep-purple')
        .warnPalette('deep-orange');

		// Mentor Skin --Part2
        triThemingProvider.theme('Mentor_deep-purple_100')
        .primaryPalette('deep-purple', {
            'default': '50'
        })
        .accentPalette('deep-purple', {
            'default': '300'
        })
        .warnPalette('deep-orange');

		// Mentor Setting
        triSkinsProvider.skin('Mentor', 'Mentor') //--Mentor
        .sidebarTheme('Mentor_deep-purple_100')
        .toolbarTheme('Mentor_deep-purple_200')
        .logoTheme('Mentor_deep-purple_200')
        .contentTheme('Mentor_deep-purple_200');	
		//---------------------------------------------------------------------------------------
		//-----Admin user
	    // Admin Skin --Part1
        triThemingProvider.theme('Admin_teal_200')
        .primaryPalette('teal' , {
            'default': '200'
        })
        .accentPalette('teal')
        .warnPalette('deep-orange');

		// Admin Skin --Part2
        triThemingProvider.theme('Admin_teal_100')
        .primaryPalette('teal', {
            'default': '50'
        })
        .accentPalette('teal', {
            'default': '300'
        })
        .warnPalette('deep-orange');

		// Admin Setting
        triSkinsProvider.skin('Admin', 'Admin') //--Admin
        .sidebarTheme('Admin_teal_100')
        .toolbarTheme('Admin_teal_200')
        .logoTheme('Admin_teal_200')
        .contentTheme('Admin_teal_200');	
		//---------------------------------------------------------------------------------------


        /**
         *  FOR DEMO PURPOSES ALLOW SKIN TO BE SAVED IN A COOKIE
         *  This overrides any skin set in a call to triSkinsProvider.setSkin if there is a cookie
         *  REMOVE LINE BELOW FOR PRODUCTION SITE
         */
        triSkinsProvider.useSkinCookie(true);

        /**
         *  SET DEFAULT SKIN
         */
        triSkinsProvider.setSkin('Student');

    }
})();
