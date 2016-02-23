(function() {
    'use strict';

    angular
        .module('app.newcontact')
        .run(appRun);

    // appRun.$inject = ['routehelper']

    /* @ngInject */
    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/new-contact',
                config: {
                    templateUrl: 'app/new-contact/new-contact.html',
                    controller: 'newContact',
                    controllerAs: 'vm',
                    title: 'New Contact',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-user-plus"></i> New Contact'
                    }
                }
            }
        ];
    }
})();
