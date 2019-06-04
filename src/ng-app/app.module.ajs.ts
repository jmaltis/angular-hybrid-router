import * as angular from "angular";

var angularjsModule = angular.module("angularjsModule", [
    "valdr"
]);

angularjsModule.run(["valdr", "valdrMessage",
    function (valdr, valdrMessage) {
        // Enables usage of valdrMessages
        valdrMessage.angularMessagesEnabled = true;

        // Add some fake valdr constraints
        valdr.addConstraints({
            InputTestConstraint: {
                testField: {
                    required: {
                        message: "This field is required"
                    }
                }
            }
        });
    }
]);

export default angularjsModule;
