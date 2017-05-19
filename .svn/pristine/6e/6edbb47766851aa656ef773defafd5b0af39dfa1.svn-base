(function() {
    'use strict';

    angular
        .module('app.main.landing', ['ngAnimate'])
        .controller('LandingController', LandingController);

    function LandingController($state,triSettings) {
        var vm = this;
        vm.triSettings = triSettings;

        vm.Home = Home;
        vm.Login = Login;

        function Home() {
            $state.go('landing')
        }

        function Login() {
            $state.go('authentication.login')
        }

    };

})();
