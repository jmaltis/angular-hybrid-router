import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {ToggleDirective} from "./toggle/toggle.directive";
import {downgradeComponent, UpgradeModule} from "@angular/upgrade/static";
import * as angular from 'angular';
import {AppComponent} from "./app.component";
import {toggleNg1Directive} from "./toggle/toggle-ng1.directive";

@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule
    ],
    declarations: [
        AppComponent,
        ToggleDirective
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
            .directive("toggle-ng1-directive", toggleNg1Directive);

        // Boostraping of the hybrid app
        this.upgrade.bootstrap(document.body, ["angularjsModule"], {strictDi: true});
    }
}
