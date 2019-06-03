import {Component} from '@angular/core';

@Component({
    selector: "app-root",
    template: `
        <div>
            ROOT - AppComponent written in Angular and downgraded to AngularJS:
            <br/>
            <ahp-input label="CHL_EUS_CODE"
                       inputId="eusCode"
                       mode="EDITABLE"></ahp-input>
        </div>
    `,
    styleUrls: ["./app.component.less"]
})
export class AppComponent {

}
