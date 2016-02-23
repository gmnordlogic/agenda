(function() {
    'use strict';

    angular
        .module('app.agenda')
        .controller('Agenda', Agenda);

    /* @ngInject */
    function Agenda(dataservice, logger) {
        /*jshint validthis: true */
        var vm = this;
        vm.agenda = [];
        vm.title = 'Agenda';

        activate();

        function activate() {
            return getAgenda().then(function() {
                logger.info('Activated Agenda View');
            });
        }

        function getAgenda() {
            return dataservice.getAgenda().then(function(data) {
                vm.agenda = data;
                console.log(vm.agenda);
                return vm.agenda;
            });
        }
    }
})();
