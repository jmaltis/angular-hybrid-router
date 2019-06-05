import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {InputDirective} from "./form/input/input.directive";
import {UpgradeModule} from "@angular/upgrade/static";
import {FormComponent} from "./form/form.component";
import {default as angularJsModule} from "../ng-app/app.module.ajs";
import {UIRouterUpgradeModule} from "@uirouter/angular-hybrid";

@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule,
        UIRouterUpgradeModule.forRoot(),
    ],
    declarations: [
        FormComponent,
        InputDirective
    ],
    entryComponents: [
        FormComponent
    ]
})
export class AppModule {
    constructor(private upgrade: UpgradeModule) {
    }

    ngDoBootstrap() {
        // Bootstrapping of the hybrid app
        this.upgrade.bootstrap(document.body, [angularJsModule.name], {strictDi: true});
    }
}
