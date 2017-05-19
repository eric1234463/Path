(function() {
    'use strict';

    angular
        .module('app.main.dashboards')
        .controller('DashboardController', DashboardController);

    function DashboardController(DashboardService, $localStorage, triSkins, $cookies, $window) {
        var vm = this;
        vm.prevTweet = prevTweet;
        vm.nextTweet = nextTweet;

        DashboardService.getOfferEachYear().then(function(response) {
            vm.offerByYear = response.data;
        });
        DashboardService.getCurrentOfferBySchool().then(function(response) {
            vm.offerBySchool = response.data;
        });
        DashboardService.getCurrentSchoolOfferByType().then(function(response) {
            vm.offerByType = response.data;
        });
        DashboardService.getOfferEachYearBySchool().then(function(response) {
            vm.offerByYearBySchool = response.data;
        });
        DashboardService.getDailyMessage().then(function(response) {
            vm.tweets = response.data;
            vm.background = vm.tweets[0].bg;
        });
        vm.selectedTab = 0;
        vm.i = 0;
        vm.currentUser = $localStorage.currentUser;
        vm.skins = triSkins.getSkins();

        console.log(vm.skins);
        console.log($localStorage.changeTheme);
        if ($localStorage.changeTheme == true) {
            
            $localStorage.changeTheme = false;
            $window.location.reload();
        }

        function prevTweet() {
            vm.selectedTab--;
            vm.i--;
            if (vm.selectedTab < 0) {
                vm.selectedTab = vm.tweets.length - 1;
                vm.i = vm.tweets.length - 1;
                vm.background = vm.tweets[vm.selectedTab].bg;
            } else {
                vm.background = vm.tweets[vm.selectedTab].bg;

            }
        }

        function nextTweet() {
            vm.selectedTab++;
            vm.i++;
            if (vm.selectedTab == vm.tweets.length) {
                vm.selectedTab = 0;
                vm.i = 0;
                vm.background = vm.tweets[vm.selectedTab].bg;

            } else {
                vm.background = vm.tweets[vm.selectedTab].bg;

            }
        }
    }
})();
