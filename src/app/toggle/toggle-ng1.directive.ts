export function toggleNg1Directive() {
    return {
        restrict: 'E',
        template: `
            <div class="toggle">
                Toggle written in AngularJS and upgraded to Angular
            </div>
        `,
        controller: function () {

        }
    };
}
