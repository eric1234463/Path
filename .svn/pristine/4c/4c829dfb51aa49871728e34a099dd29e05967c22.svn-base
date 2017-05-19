angular
    .module('app.main.authentication')
    .factory('AccountService', function($http, RoleStore, $q, $cookies, triMenu, $localStorage) {

        return {
            loginChecker: function(AccountName, AccountPassword) {
                var query = $http.get('http://unicomhk.net/path2/php/account.php?action=checkLogin&AccountName=' + AccountName + '&AccountPassword=' + AccountPassword);
                return query;
            },

            hasPermission: function(permission) {
                var deferred = $q.defer();
                var hasPermission = false;
                currentUser = $localStorage.currentUser;
                // check if user has permission via its roles
                angular.forEach(currentUser.roles, function(role) {
                    // check role exists
                    if (RoleStore.hasRoleDefinition(role)) {
                        // get the role
                        var roles = RoleStore.getStore();

                        if (angular.isDefined(roles[role])) {
                            // check if the permission we are validating is in this role's permissions
                            if (-1 !== roles[role].validationFunction.indexOf(permission)) {
                                hasPermission = true;
                            }
                        }
                    }
                });

                // if we have permission resolve otherwise reject the promise
                if (hasPermission) {
                    deferred.resolve();
                } else {
                    deferred.reject();
                }

                // return promise
                return deferred.promise;
            },
            setCookies: function(Account) {
                var expireDate = new Date();
                expireDate.setDate(expireDate.getDate() + 3);

                $cookies.put('accountID', Account.accountID, { 'expires': expireDate });
                $cookies.put('displayName', Account.displayName, { 'expires': expireDate });
                $cookies.put('username', Account.username, { 'expires': expireDate });
                $cookies.put('avatar', Account.avatar, { 'expires': expireDate });
                $cookies.put('schoolID', Account.schoolID, { 'expires': expireDate });
                $cookies.put('programID', Account.programID, { 'expires': expireDate });
                $cookies.put('schoolName', Account.schoolName, { 'expires': expireDate });
                $cookies.put('programName', Account.programName, { 'expires': expireDate });
                $cookies.put('roles', Account.roles, { 'expires': expireDate });
                $cookies.put('year', Account.year, { 'expires': expireDate });
                $cookies.put('cgpa', Account.cgpa, { 'expires': expireDate });
            },

            updatePassword: function(AccountID, AccountPassword) {
                var query = $http.get('http://unicomhk.net/path2/php/account.php?action=updatePassword&AccountID=' + AccountID + '&AccountPassword=' + AccountPassword);
                return query;
            },

            checkPassword: function(AccountID, AccountPassword) {
                var query = $http.get('http://unicomhk.net/path2/php/account.php?action=checkPassword&AccountID=' + AccountID + '&AccountPassword=' + AccountPassword);
                return query;
            },


            uploadIcon: function() {
                $http.get('http://unicomhk.net/path2/php/account.php?action=uploadIcon');
            },

            checkMenu: function() {
                var userGroup = $localStorage.currentUser.roles[0];
                switch (userGroup) {
                    case "STUDENT":
                        if ($localStorage.currentUser.mentor == 0) {
                            triMenu.removeMenu('triangular.mentorProfile');
                            triMenu.removeMenu('triangular.appointment');
                            triMenu.removeMenu('triangular.meeting');
                            triMenu.removeMenu('triangular.viewnote');
                        } else {
                            triMenu.removeMenu('triangular.choose');
                        }
                    break;
                }

            },
            updatePersonalInfo: function(AccountID, userName, cgpa, myData) {
                $http.get('http://unicomhk.net/path2/php/account.php?action=updatePersonalInfo&AccountID=' + AccountID + '&userName=' + userName + '&cgpa=' + cgpa + '&myData=' + myData);
            },

            setReadNotification:function(notification){
                $http.get('http://unicomhk.net/path2/php/account.php?action=setReadNotification&notificationID=' +notification.notificationID);
            },

            logout: function(uID){
                $http.get('http://unicomhk.net/path2/php/account.php?action=logout&uID=' + uID);
            }

        };
    });
