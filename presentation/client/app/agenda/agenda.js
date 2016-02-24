(function() {
    //'use strict';

    angular
        .module('app.agenda')
        .controller('Agenda', Agenda);

    /* @ngInject */
    Agenda.$inject = ["dataservice", "logger"];
    function Agenda(dataservice, logger) {
        /*jshint validthis: true */
        var vm = this;
        vm.agenda = [];
        vm.title = 'Agenda';

        activate();
        getAgenda();

        function activate() {
            logger.info('Activated Agenda View');
        }

        function getAgenda() {
            vm.agenda = dataservice.getAgendaList();
            return vm.agenda;
        }
    }
})();
