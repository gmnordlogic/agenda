(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    /* @ngInject */
    function dataservice($http, $location, $q, exception, logger) {
        var isPrimed = false;
        var primePromise;

        var service = {
            getAgendaList: getAgendaList,
            getAgendaCount: getAgendaCount,
            getMotto: getMotto,
            ready: ready
        };

        return service;

        function getMotto(){
            return $http.get('/api/mam')
                .then(getMottoComplete)
                .catch(function(message){
                    exception.catcher('Connection failed for Motto')(message);
                });

            function getMottoComplete(data, status, headers, config){
                return data.data[0].data.results;
            }
        }

        function getAgendaList() {
            return $http.get('/api/maa')
                .then(getAgendaComplete)
                .catch(function(message) {
                    exception.catcher('XHR Failed for getAgendaList')(message);
                    $location.url('/');
                });

            function getAgendaComplete(data, status, headers, config) {
                return data.data[0].data.results;
            }
        }

        function getAgendaCount() {
            var count = 0;
            return getAgendaNames()
                .then(getAgendaPersonComplete)
                .catch(exception.catcher('XHR Failed for getAgendaCount'));

            function getAgendaPersonComplete (data) {
                count = data.length;
                return $q.when(count);
            }
        }

        function getAgendaNames() {
            var cast = [
                {name: 'Robert Downey Jr.', character: 'Tony Stark / Iron Man'},
                {name: 'Clark Gregg', character: 'Agent Phil Coulson'}
            ];
            return $q.when(cast);
        }

        function prime() {
            // This function can only be called once.
            if (primePromise) {
                return primePromise;
            }

            primePromise = $q.when(true).then(success);
            return primePromise;

            function success() {
                isPrimed = true;
                logger.info('Primed data');
            }
        }

        function ready(nextPromises) {
            var readyPromise = primePromise || prime();

            return readyPromise
                .then(function() { return $q.all(nextPromises); })
                .catch(exception.catcher('"ready" function failed'));
        }

    }
})();
