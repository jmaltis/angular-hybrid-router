import {Component} from "@angular/core";

@Component({
    selector: "app-root",
    template: `
        <a ui-sref=".ng1" ui-sref-active-eq="active">app.ng1</a>
        <a ui-sref=".ng1.ng2" ui-sref-active-eq="active">app.ng1.ng2</a>
        <a ui-sref=".ng2" ui-sref-active-eq="active">app.ng2</a>
        <a ui-sref=".ng2.ng2" ui-sref-active-eq="active">app.ng2.ng2</a>
        <ui-view></ui-view>
    `,
    styleUrls: ["./app.component.less"]
})
export class AppComponent {

}
