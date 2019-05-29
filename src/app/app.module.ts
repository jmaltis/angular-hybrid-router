import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AngularDirective} from "./angular/angular.directive";
import {downgradeComponent, UpgradeModule} from "@angular/upgrade/static";
import * as angular from 'angular';
import {AppComponent} from "./app.component";
import {angularjsDirective} from "./angularjs/angularjs.directive";

@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule
    ],
    declarations: [
        AppComponent,
        AngularDirective
    ],
    entryComponents: [
        AppComponent
    ]
})
export class AppModule {
    constructor(private upgrade: UpgradeModule) {
    }

    ngDoBootstrap() {
        // Create main angularJs module
        angular
            .module("angularjsModule", [])
            .directive("appRoot", downgradeComponent({component: AppComponent}))
            .directive("angularjs-directive", angularjsDirective);

        // Boostraping of the hybrid app
        this.upgrade.bootstrap(document.body, ["angularjsModule"], {strictDi: true});
    }
}
