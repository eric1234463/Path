angular
    .module('app.main.authentication')
    .factory('SignUpService', function($http) {

        return {
            getSchoolList: function() {
                var query = $http.get('http://unicomhk.net/path2/php/signup.php?action=getSchoolList');
                return query;
            },
            getProgramList: function(schoolID) {
                var query = $http.get('http://unicomhk.net/path2/php/signup.php?action=getProgramList&schoolID=' + schoolID);
                return query;
            }, 
            getAccountList:function(){
                var query = $http.get('http://unicomhk.net/path2/php/signup.php?action=getAccountList');
                return query;
            }
      
        
        };
    });
