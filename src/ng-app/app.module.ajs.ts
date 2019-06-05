import * as angular from "angular";
import {UrlService} from "@uirouter/core";
import {FormComponent} from "../app/form/form.component";

var angularjsModule = angular.module("angularjsModule", [
    "valdr",
    "ui.router",
    "ui.router.upgrade"
]);

angularjsModule.run(["valdr", "valdrMessage",
    (valdr, valdrMessage) => {
        // Enables usage of valdrMessages
        valdrMessage.angularMessagesEnabled = true;

        // Add some fake valdr constraints
        valdr.addConstraints({
            InputTestConstraint: {
                testField: {
                    required: {
                        message: "This field is required"
                    }
                }
            }
        });
    }
]);

angularjsModule.run(["$stateRegistry", "$urlService",
    ($stateRegistry, $urlService) => {
        $urlService.rules.initial({state: "app"});

        $stateRegistry.register({
            url: "",
            name: "app",
            template: `
        <a ui-sref=".ng1" ui-sref-active-eq="active">AngularJs route (controller / template)</a>
        <a ui-sref=".ng2" ui-sref-active-eq="active">Angular route (component)</a>
        <ui-view></ui-view>
      `,
        });

        // route to ng1 (AngularJS)
        $stateRegistry.register({
            url: "/ng1",
            name: "app.ng1",
            template: "<h1>Other</h1>",
            controller: function () { /* do stuff */
            }
        });

        // route to ng2 (Angular)
        $stateRegistry.register({
            url: "/ng2",
            name: "app.ng2",
            component: FormComponent
        });
    }
]);

angularjsModule.config(["$urlServiceProvider", "$locationProvider", "$urlRouterProvider",
    (urlService: UrlService, locationProvider, routerProvider) => {
        urlService.deferIntercept();
        locationProvider.hashPrefix("");
        routerProvider.otherwise("/");
    }
]);

export default angularjsModule;
