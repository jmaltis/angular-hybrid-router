import * as angular from "angular";
import {UrlService} from "@uirouter/core";
import {sampleModule} from "./sample/index";

var angularjsModule = angular.module("angularjsModule", [
    "valdr",
    "ui.router",
    "ui.router.upgrade",
    sampleModule.name
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

        // Register app route to app template
        $stateRegistry.register({
            url: "",
            name: "app",
            template: require("./app.tpl.html")
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
