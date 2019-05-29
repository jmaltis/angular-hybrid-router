import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {AngularDirective} from "./angular/angular.directive";
import {UpgradeModule} from "@angular/upgrade/static";
import * as angular from 'angular';
import {angularjsDirective} from "./angularjs/angularjs.directive";
import {ContainerComponent} from "./angular/container.component";

angular.module("angularjsModule", [])
    .directive("angularjs-directive", angularjsDirective);

@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule
    ],
    declarations: [
        AppComponent,
        ContainerComponent,
        AngularDirective
    ],
    entryComponents: [
        AppComponent,
        ContainerComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
    constructor(private upgrade: UpgradeModule) {
    }

    ngDoBootstrap() {
        this.upgrade.bootstrap(document.body, ["angularjsModule"], {strictDi: true});
    }
}
