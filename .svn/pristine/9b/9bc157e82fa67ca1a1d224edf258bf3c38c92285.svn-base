angular
    .module('app.main.dashboards', [])
    .factory('DashboardService', function($http) {
        return {
            getOfferEachYear: function() {
                var query = $http.get('http://unicomhk.net/path2/php/dashboards.php?action=getOfferEachYear');
                return query;
            },
            getCurrentOfferBySchool: function() {
                var query = $http.get('http://unicomhk.net/path2/php/dashboards.php?action=getCurrentOfferBySchool');
                return query;
            },
            getCurrentSchoolOfferByType: function() {
                var query = $http.get('http://unicomhk.net/path2/php/dashboards.php?action=getCurrentSchoolOfferByType');
                return query;
            },
            getOfferEachYearBySchool: function() {
                var query = $http.get('http://unicomhk.net/path2/php/dashboards.php?action=getOfferEachYearBySchool');
                return query;
            },
            getDailyMessage: function() {
                var query = $http.get('http://unicomhk.net/path2/php/dashboards.php?action=getDailyMessage');
                return query;
            }
        };
    });
