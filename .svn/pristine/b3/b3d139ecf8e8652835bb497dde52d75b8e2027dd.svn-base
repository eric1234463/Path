    angular
        .module('app.main.landing')
        .directive("scroll", function($window) {
            return function(scope, element, attrs) {
                angular.element($window).bind("scroll", function() {
                    if (this.pageYOffset > 10) {
                        scope.bool = true;
                    } else {
                        scope.bool = false;
                    }
                    scope.$apply();
                });
            };
        });
