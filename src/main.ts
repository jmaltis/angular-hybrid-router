import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {setAngularJSGlobal} from '@angular/upgrade/static';
import * as angular from 'angular';

setAngularJSGlobal(angular);
platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));
