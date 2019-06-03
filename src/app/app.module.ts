import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {InputDirective, inputNg1Directive} from "./form/input/input.directive";
import {downgradeComponent, UpgradeModule} from "@angular/upgrade/static";
import * as angular from 'angular';
import {AppComponent} from "./app.component";
import {FormComponent} from "./form/form.component";

@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule
    ],
    declarations: [
        AppComponent,
        FormComponent,
        InputDirective
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
            .directive(inputNg1Directive().selector, inputNg1Directive);

        // Bootstrapping of the hybrid app
        this.upgrade.bootstrap(document.body, [module.name], {strictDi: true});
    }
}
