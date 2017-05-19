(function() {
    'use strict';

    angular
        .module('app.main.mentorship')
        .controller('ViewNoteController', ViewNoteController);

    function ViewNoteController(MentorshipService, $localStorage) {
    	var vm = this;

    	MentorshipService.getNote($localStorage.mentor).then(function(response) {
    		vm.noteList=response.data;
    	})            

    }

})();