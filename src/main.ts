import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app/app.module";
import {UIRouter, UrlService} from "@uirouter/core";
import {NgZone} from "@angular/core";

// Import angularJS files as modules
declare const require: any;
const context = require.context("./ng-app", true, /\.js$/);
context.keys().forEach((file: any) => {
    try {
        context(file);
    } catch (err) {
        console.log(err, file);
    }
});

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then(platformRef => {
        // Initialize the Angular Module
        // get() the UIRouter instance from DI to initialize the router
        const urlService: UrlService = platformRef.injector.get(UIRouter).urlService;

        // Instruct UIRouter to listen to URL changes
        function startUIRouter() {
            urlService.listen();
            urlService.sync();
        }

        platformRef.injector.get<NgZone>(NgZone).run(startUIRouter);
    })
    .catch(err => console.log(err));
