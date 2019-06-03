import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {InputDirective} from "./form/input/input.directive";
import {downgradeComponent, UpgradeModule} from "@angular/upgrade/static";
import {AppComponent} from "./app.component";
import {FormComponent} from "./form/form.component";
import {default as angularJsModule} from '../ng-app/app.module.ajs';

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
        // Add downgraded component to Angular JS main module
        angularJsModule.directive("appRoot", downgradeComponent({component: AppComponent}));

        // Bootstrapping of the hybrid app
        this.upgrade.bootstrap(document.body, [angularJsModule.name], {strictDi: true});
    }
}
