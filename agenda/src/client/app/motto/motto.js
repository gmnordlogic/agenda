(function() {
    //'use strict';

    angular
        .module('app.motto')
        .controller('Motto', Motto);

    /* @ngInject */
    function Motto(dataservice, logger) {
        /*jshint validthis: true */
        var vm = this;
        vm.motto = [];
        vm.title = 'Motto';

        activate();

        function activate() {
            return getMotto().then(function() {
                logger.info('Activated Motto View');
            });
        }

        function getMotto() {
            return dataservice.getMotto().then(function(data) {
                vm.motto = data;
                console.log(vm.motto);
                return vm.motto;
            });
        }
    }
})();
