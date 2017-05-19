angular
    .module('app.main.study', [])
    .factory('StudyService', function($http) {
        return {
            getTimeLine : function() {
                var query = $http.get('http://unicomhk.net/path2/php/study.php?action=getTimeLine');
                return query;
            },

            getEvents : function(acID,subdegreeID) {
            	var query = $http.get('http://unicomhk.net/path2/php/study.php?action=getEvents&acID=' + acID + '&subdegreeID=' + subdegreeID );
            	return query;
            },

            formGrp :function(evtID) {
                var query = $http.get('http://unicomhk.net/path2/php/study.php?action=formGrp&evtID=' + evtID );
                return query;
            },

            getGrp :function(evtID, acID) {
                var query = $http.get('http://unicomhk.net/path2/php/study.php?action=getGrp&evtID=' + evtID +'&acID=' + acID);
                return query;
            },

            joinActivity : function(evtID, acID) {
                var query = $http.get('http://unicomhk.net/path2/php/study.php?action=joinActivity&evtID=' + evtID + '&acID=' + acID );
                return query;
            },

            getTest : function(accountID) {
            	var query = $http.get('http://unicomhk.net/path2/php/chat.php?action=testMessage&accountID=' + accountID);
            	return query;
            },

            getMessage : function(chatID) {
                var query = $http.get('http://unicomhk.net/path2/php/chat.php?action=getMessage&chatID=' + chatID);
                return query;
            },

            getContactList : function(accountID) {
                var query = $http.get('http://unicomhk.net/path2/php/chat.php?action=getContactList&accountID=' + accountID);
                return query;
            },

            contactList : function(accountID) {
                var query = $http.get('http://unicomhk.net/path2/php/chat.php?action=contactList&accountID=' + accountID);
                return query;
            },

            sendMessage : function(chatID, senderAccountID, message, messageTime) {
                var query = $http.get('http://unicomhk.net/path2/php/chat.php?action=sendMessage&chatID=' + chatID 
                    + "&chatID=" + chatID
                    + "&senderAccountID=" + senderAccountID
                    + "&message=" + message
                    + "&messageTime=" + messageTime);
                return query;
            }
        };
    });
