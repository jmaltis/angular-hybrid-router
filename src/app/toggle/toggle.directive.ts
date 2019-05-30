import {Directive, ElementRef, Injector} from '@angular/core';
import {UpgradeComponent} from '@angular/upgrade/static';

export function toggleNg1Directive() {
    return {
        selector: "toggle",
        restrict: "E",
        template: require('./toggle.tpl.html'),
        controller: function () {
        }
    };
}

@Directive({
    selector: toggleNg1Directive().selector
})
export class ToggleDirective extends UpgradeComponent {
    constructor(elementRef: ElementRef, injector: Injector) {
        super(toggleNg1Directive().selector, elementRef, injector);
    }
}
