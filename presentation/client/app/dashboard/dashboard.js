(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('Dashboard', Dashboard);

    Dashboard.$inject = ['$q', 'dataservice', 'logger'];

    function Dashboard($q, dataservice, logger) {

        /*jshint validthis: true */
        var vm = this;

        vm.news = {
            title: 'Agenda News',
            description: 'AngularUI Agenda is now in production!'
        };
        vm.title = 'Dashboard';

        activate();

        function activate() {
            logger.info('Activated Dashboard View');
        }
    }
})();
