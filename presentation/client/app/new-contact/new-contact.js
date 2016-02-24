(function() {
    //'use strict';

    angular
        .module('app.newcontact')
        .controller('newContact', newContact);

    /* @ngInject */
    newContact.$inject = ['logger'];
    function newContact(logger) {
        /*jshint validthis: true */
        var vm = this;
        vm.contact = [];
        vm.title = 'Agenda: New Contact';

        activate();

        function activate() {
            logger.info('Activated Agenda add new contact');
        }
    }
})();
