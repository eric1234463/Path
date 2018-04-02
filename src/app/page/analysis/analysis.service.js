angular
    .module('app.main.analysis', [])
    .factory('AnalysisService', function($http) {
        return {
            getSchoolList: function() {
                var query = $http.get('http://erickwong.hk/path2/php/live.php?action=getSchoolList');
                return query;
            },
            getProgramList: function(schoolID) {
                var query = $http.get('http://erickwong.hk/path2/php/live.php?action=getProgramList&schoolID=' + schoolID);
                return query;
            },
            getSuccessCase : function() {
                var query = $http.get('http://erickwong.hk/path2/php/analysis.php?action=getSucessCase');
                return query;
            },
            createCase: function(newcase, subSchoolID, subProgramID, accountID) {
                var query = $http.get('http://erickwong.hk/path2/php/analysis.php?action=createCase&schoolID=' + newcase.school
                    + '&programID=' + newcase.program
                    + '&sem1GPA=' + newcase.yr1sem1
                    + '&sem2GPA=' + newcase.yr1sem2
                    + '&sem3GPA=' + newcase.yr2sem1
                    + '&sem4GPA=' + newcase.yr2sem2
                    + '&ielts=' + newcase.ielts
                    + '&offerDate=' + newcase.date
                    + '&dse=' + newcase.dse
                    + '&subSchoolID=' + subSchoolID
                    + '&subProgramID=' + subProgramID
                    + '&accountID=' + accountID
                );
            },
	}
});
