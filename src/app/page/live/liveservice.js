angular
    .module('app.main.live', [])
    .factory('LiveService', function($http) {
        return {
            getChoiceList: function() {
                var query = $http.get('http://erickwong.hk/path2/php/live.php?action=getChoiceList');
                return query;
            },
            getSchoolList: function() {
                var query = $http.get('http://erickwong.hk/path2/php/live.php?action=getSchoolList');
                return query;
            },
            getProgramList: function(schoolID) {
                var query = $http.get('http://erickwong.hk/path2/php/live.php?action=getProgramList&schoolID=' + schoolID);
                return query;
            },
            createChoice: function(choice) {
                $http.get('http://erickwong.hk/path2/php/live.php?action=createChoice&schoolID=' + choice.school + '&programID=' + choice.program + '&gpa=' + choice.gpa + '&dse=' + choice.dse);
            }
        };
    });
