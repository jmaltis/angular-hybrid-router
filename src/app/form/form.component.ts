import {Component} from "@angular/core";

@Component({
    selector: "ahp-form",
    template: `
        <div class="ahp-form">
            <span><strong>Form component (Angular component)</strong></span>
            <br/>
            Input value in Angular: {{field}}
            <br/>
            <ahp-input label="LABEL_CODE"
                       inputId="testField"
                       mode="EDITABLE"
                       [(model)]="field"></ahp-input>
        </div>
    `,
    styleUrls: ["./form.component.less"]
})
export class FormComponent {
    field: string = "Default value";
}
