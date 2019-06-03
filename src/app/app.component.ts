import {Component} from '@angular/core';

@Component({
    selector: "app-root",
    template: `
        <div>
            <span><strong>ROOT - AppComponent (Angular component)</strong> / <i>downgraded to AngularJS</i></span>
            <br/>
            <ahp-form></ahp-form>
        </div>
    `,
    styleUrls: ["./app.component.less"]
})
export class AppComponent {

}
