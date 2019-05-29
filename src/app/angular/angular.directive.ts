import {Directive, ElementRef, Injector} from '@angular/core';
import {UpgradeComponent} from '@angular/upgrade/static';

@Directive({
    selector: "angular-component"
})
export class AngularDirective extends UpgradeComponent {
    constructor(elementRef: ElementRef, injector: Injector) {
        super("angularjs-directive", elementRef, injector);
    }
}
