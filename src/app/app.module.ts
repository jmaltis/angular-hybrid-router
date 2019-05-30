import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {ToggleDirective, toggleNg1Directive} from "./toggle/toggle.directive";
import {downgradeComponent, UpgradeModule} from "@angular/upgrade/static";
import * as angular from 'angular';
import {AppComponent} from "./app.component";

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
        const module = angular
            .module("angularjsModule", [])
            .directive("appRoot", downgradeComponent({component: AppComponent}))
            .directive(toggleNg1Directive().selector, toggleNg1Directive);

        // Bootstrapping of the hybrid app
        this.upgrade.bootstrap(document.body, [module.name], {strictDi: true});
    }
}
