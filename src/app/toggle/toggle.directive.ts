import {Directive, ElementRef, Injector} from '@angular/core';
import {UpgradeComponent} from '@angular/upgrade/static';

@Directive({
    selector: "toggle-component"
})
export class ToggleDirective extends UpgradeComponent {
    constructor(elementRef: ElementRef, injector: Injector) {
        super("toggle-ng1-directive", elementRef, injector);
    }
}
