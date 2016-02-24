(function () {
    //'use strict';

    angular
        .module ( 'app.editcontact' )
        .controller ( 'editContact', editContact );

    /* @ngInject */
    editContact.$inject = [ 'logger', 'dataservice', '$routeParams' ];
    function editContact ( logger, dataservice, $routeParams ) {
        /*jshint validthis: true */
        var vm         = this;
        vm.contact     = {
            fname : null,
            lname : null,
            email : null,
            phone : null,
            id    : null
        };
        vm.id = $routeParams.id;
        vm.title  = 'Agenda: Edit Contact';
        vm.dataservice = dataservice;
        vm.updateForm  = updateForm;

        activate ();

        function activate () {
            logger.info ( 'Activated Agenda contact editing form' );
        }

        function updateForm ( editContactForm ) {
            if ( editContactForm ) {
                // code for update!
            } else {
                logger.warning ( 'The edit form is not completed!' );
            }
        }

    }
}) ();
