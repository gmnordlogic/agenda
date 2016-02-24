<!DOCTYPE html>
<html data-ng-app="app" ng-strict-di>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
    <title data-ng-bind="title"></title>
    <style>
        /* This helps the ng-show/ng-hide animations start at the right place. */
        /* Since Angular has this but needs to load, this gives us the class early. */
        .ng-hide {
            display: none!important;
        }
    </style>

    <!-- inject-vendor:css -->
    <link href="/assets/css/bootstrap.min.css" rel="stylesheet" />
    <link href="/assets/css/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
    <link href="/assets/css/toastr.css" rel="stylesheet" />
    <!-- endinject -->

    <!-- inject:css -->
    <link href="/client/content/customtheme.css" rel="stylesheet">
    <link href="/client/content/styles.css" rel="stylesheet" />
    <!-- endinject -->
</head>
<body>
    <div>
        <div data-ng-include="'app/layout/shell.html'"></div>
        <div id="splash-page" data-ng-show="false">
            <div class="page-splash">
                <div class="page-splash-message">
                    AngularUI AGENDA
                </div>
                <div class="progress progress-striped active page-progress-bar">
                    <div class="bar"></div>
                </div>
            </div>
        </div>
    </div>

    <!-- inject-vendor:js -->
    <script src="/assets/js/jquery-1.12.0.min.js"></script>
    <script src="/assets/js/angular.js"></script>
    <script src="/assets/js/angular-animate.js"></script>
    <script src="/assets/js/angular-route.js"></script>
    <script src="/assets/js/angular-sanitize.js"></script>
    <script src="/assets/js/angular-local-storage.js"></script>
    <script src="/assets/js/ui-bootstrap-tpls-1.1.2.min.js"></script>
    <script src="/assets/js/bootstrap.js"></script>
    <script src="/assets/js/toastr.js"></script>
    <script src="/assets/js/moment.js"></script>
    <script src="/assets/js/ngplus.js"></script>
    <!-- endinject -->


    <!-- inject:js -->
    <!-- Bootstrapping -->
    <script src="/client/app/app.module.js"></script>

    <!-- Reusable Blocks/Modules -->
    <script src="/client/app/blocks/exception/exception.module.js"></script>
    <script src="/client/app/blocks/exception/exception-handler.provider.js"></script>
    <script src="/client/app/blocks/exception/exception.js"></script>
    <script src="/client/app/blocks/logger/logger.module.js"></script>
    <script src="/client/app/blocks/logger/logger.js"></script>
    <script src="/client/app/blocks/router/router.module.js"></script>
    <script src="/client/app/blocks/router/routehelper.js"></script>

    <!-- core module -->
    <script src="/client/app/core/core.module.js"></script>
    <script src="/client/app/core/constants.js"></script>
    <script src="/client/app/core/dataservice.js"></script>
    <script src="/client/app/core/config.js"></script>


    <!-- layout -->
    <script src="/client/app/layout/layout.module.js"></script>
    <script src="/client/app/layout/shell.js"></script>
    <script src="/client/app/layout/sidebar.js"></script>

    <!--widgets-->
    <script src="/client/app/widgets/widgets.module.js"></script>
    <script src="/client/app/widgets/ccSidebar.js"></script>
    <script src="/client/app/widgets/ccSpinner.js"></script>
    <script src="/client/app/widgets/ccWidgetClose.js"></script>
    <script src="/client/app/widgets/ccWidgetHeader.js"></script>
    <script src="/client/app/widgets/ccWidgetMinimize.js"></script>

    <!-- dashboard -->
    <script src="/client/app/dashboard/dashboard.module.js"></script>
    <script src="/client/app/dashboard/config.route.js"></script>
    <script src="/client/app/dashboard/dashboard.js"></script>

    <!--agenda module-->
    <script src="/client/app/agenda/agenda.module.js"></script>
    <script src="/client/app/agenda/config.route.js"></script>
    <script src="/client/app/agenda/agenda.js"></script>
    <!-- endinject -->
    
    <!--contact module-->
    <script src="/client/app/contact/new-contact.module.js"></script>
    <script src="/client/app/contact/config.route.js"></script>
    <script src="/client/app/contact/new-contact.js"></script>
    <script src="/client/app/contact/edit-contact.module.js"></script>
    <script src="/client/app/contact/edit-contact.js"></script>
    <!-- endinject -->
</body>
</html>
