(function() {
    //'use strict';

    angular
        .module('app.motto')
        .run(appRun);

    // appRun.$inject = ['routehelper']

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/motto',
                config: {
                    templateUrl: 'app/motto/motto.html',
                    controller: 'Motto',
                    controllerAs: 'vm',
                    title: 'motto',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-circle"></i> Motto'
                    }
                }
            }
        ];
    }
})();
