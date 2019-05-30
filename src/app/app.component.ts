import {Component} from '@angular/core';

@Component({
    selector: "app-root",
    template: `
        <div>
            ROOT - AppComponent written in Angular and downgraded to AngularJS:
            <br/>
            <toggle></toggle>
        </div>
    `,
    styleUrls: ["./app.component.less"]
})
export class AppComponent {

}
