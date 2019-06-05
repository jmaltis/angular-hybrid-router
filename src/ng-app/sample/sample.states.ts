import {sampleModule} from "./sample.module.ajs";
import {FormComponent} from "../../app/form/form.component";

sampleModule.config(["$stateProvider", ($stateProvider) => {
    $stateProvider
        .state({
            name: "app.sample",
            url: "/ng1",
            template: "<div class='parent spaced'><h2>AngularJS template</h2><div ui-view></div></div>",
            controller: function () { /* do stuff */
            }
        })
        .state({
            name: "app.sample.nested",
            url: "/nested",
            template: "<div class='nested spaced'><h3>AngularJS template in nested route</h3></div>",
            controller: function () { /* do stuff */
            }
        })
        .state({
            name: "app.ng2",
            url: "/ng2",
            component: FormComponent
        });
}]);
