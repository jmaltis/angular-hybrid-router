import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app/app.module";

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

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));
