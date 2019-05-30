import {Directive, ElementRef, Injector} from '@angular/core';
import {UpgradeComponent} from '@angular/upgrade/static';
import {toggleNg1Directive} from "./toggle-ng1.directive";

@Directive({
    selector: toggleNg1Directive().selector
})
export class ToggleDirective extends UpgradeComponent {
    constructor(elementRef: ElementRef, injector: Injector) {
        super(toggleNg1Directive().selector, elementRef, injector);
    }
}
