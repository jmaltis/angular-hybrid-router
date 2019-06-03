import * as template from "./input.tpl.html";

(function () {
    "use strict";

    angular
        .module("angularjsModule")
        .directive("ahp-input-js", function ahpInputDirective() {
            return {
                restrict: "E",
                template: template, // require('./input.tpl.html') also works
                scope: {
                    model: "=", // the data model
                    mode: "@", // DISPLAY_MODES.EDITABLE, DISPLAY_MODES.READ_ONLY, DISPLAY_MODES.HIDDEN or DISPLAY_MODES.DISPLAY
                    inputId: "@", // the html id attribute
                    label: "@", // the label associated to the input
                    additionalLabel: "@", // a label to be displayed after the input (e.g. <input ...> weeks)
                    forceRequired: "=", // force the display of a star, to be used in case of conditional validation/client-side only validation rule
                    numeric: "=", // if true, leading zero will be removed when the input is in edition mode
                    noUppercase: "@",
                    css: "@?", // optional css class
                    customTemplate: "@?" // some specific pages may require specific templates (e.g. asc pages)
                },
                controllerAs: "vm",
                bindToController: true,
                controller: function ahpInputController() {
                    var DISPLAY_MODES = {
                        READ_ONLY: "READ_ONLY",
                        DISPLAY: "DISPLAY",
                        EDITABLE: "EDITABLE",
                        HIDDEN: "HIDDEN"
                    };

                    var vm = this;
                    vm.css = vm.css || "col-sm-4 form-group";

                    vm.editable = function editable() {
                        return vm.mode === DISPLAY_MODES.EDITABLE;
                    };

                    vm.isDisplay = function isDisplay() {
                        return vm.mode === DISPLAY_MODES.DISPLAY;
                    };

                    vm.showRequired = function showRequired() {
                        return vm.forceRequired && !vm.isDisplay() && vm.mode !== DISPLAY_MODES.HIDDEN;
                    };

                    vm.showInput = function showInput() {
                        return vm.mode === DISPLAY_MODES.EDITABLE || vm.mode === DISPLAY_MODES.READ_ONLY;
                    };

                    vm.showAdditionalLabel = function showAdditionalLabel() {
                        return vm.additionalLabel && vm.mode !== DISPLAY_MODES.HIDDEN;
                    };
                }
            };
        });
})();
