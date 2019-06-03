import {Directive, ElementRef, EventEmitter, Injector, Input, Output} from "@angular/core";
import {UpgradeComponent} from "@angular/upgrade/static";

@Directive({
    selector: "ahp-input"
})
export class InputDirective extends UpgradeComponent {
    @Input() label: string;
    @Input() inputId: string;
    @Input() mode: string;

    // We need to declare these two properties.
    // [(model)]="field" is the same as [model]="field" (modelChange)="field=$event"
    @Input() model: string;
    @Output() modelChange: EventEmitter<any> = new EventEmitter<any>();

    constructor(elementRef: ElementRef, injector: Injector) {
        super("ahp-input-js", elementRef, injector);
    }
}
