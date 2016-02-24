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
            var list  = localStorageService.keys ();
            var items = [];
            if ( list.length < 1 ) {
                logger.warning ( 'Agenda is empty. Please try to add a new contact.' );
                return false;
            } else {
                for ( var i = 0; i < list.length; i++ ) {
                    items[ i ] = {};
                    items[ i ] = getData ( list[ i ] );
                }
                return items;
            }
        }

        function getAgendaCount () {
            return localStorageService.length ();
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
            var id          = (new Date ()).getTime ();
            person.id = id;
            var str_to_save = angular.toJson ( person, false );
            return localStorageService.set ( id, str_to_save );
        }

        function getData ( id ) {
            var str_from = localStorageService.get ( id );
            return angular.fromJson ( str_from );
        }

    }
}) ();
