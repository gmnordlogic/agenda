(function () {
    //'use strict';

    angular
        .module ( 'app.core' )
        .factory ( 'dataservice', dataservice );

    /* @ngInject */
    dataservice.$inject = [ "$http", "$location", "$q", "exception", "logger", "localStorageService" ];
    function dataservice ( $http, $location, $q, exception, logger, localStorageService ) {
        var isPrimed = false;
        var primePromise;

        var service = {
            getAgendaList  : getAgendaList,
            getAgendaCount : getAgendaCount,
            ready          : ready,
            saveData       : saveData,
            getData        : getData,
        };

        return service;

        function getAgendaList () {
            return $http.get ( '/api/maa' )
                        .then ( getAgendaComplete )
                        .catch ( function ( message ) {
                            exception.catcher ( 'XHR Failed for getAgendaList' ) ( message );
                            $location.url ( '/' );
                        } );

            function getAgendaComplete ( data, status, headers, config ) {
                return data.data[ 0 ].data.results;
            }
        }

        function getAgendaCount () {
            return localStorageService.length();
        }

        function getAgendaNames () {
            var cast = [
                { name : 'Robert Downey Jr.', character : 'Tony Stark / Iron Man' },
                { name : 'Clark Gregg', character : 'Agent Phil Coulson' }
            ];
            return $q.when ( cast );
        }

        function prime () {
            // This function can only be called once.
            if ( primePromise ) {
                return primePromise;
            }

            primePromise = $q.when ( true ).then ( success );
            return primePromise;

            function success () {
                isPrimed = true;
                logger.info ( 'Primed data' );
            }
        }

        function ready ( nextPromises ) {
            var readyPromise = primePromise || prime ();

            return readyPromise
                .then ( function () {
                    return $q.all ( nextPromises );
                } )
                .catch ( exception.catcher ( '"ready" function failed' ) );
        }

        function saveData ( person ) {
            var str_to_save = angular.toJson ( person, false );
            var id          = (new Date ()).getTime ();
            return localStorageService.set( id, str_to_save );
        }

        function getData ( id ) {
            var str_from = localStorageService.get ( id );
            return angular.fromJson(str_from);
        }

    }
}) ();
