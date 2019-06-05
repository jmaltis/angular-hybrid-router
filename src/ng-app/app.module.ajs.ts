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
        // Set initial route to app state (displaying appTemplate)
        $urlService.rules.initial({state: "app"});

        $stateRegistry.register({
            url: "",
            name: "app",
            template: require("./app.tpl.html")
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
        // Tell UI-Router that it should wait until all bootstrapping is complete before doing the initial URL synchronization
        urlService.deferIntercept();
        locationProvider.hashPrefix("");
        routerProvider.otherwise("/");
    }
]);

export default angularjsModule;
