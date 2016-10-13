import { Component } from '@angular/core';
export class AppComponent {
    constructor() {
        this.name = 'Angular';
        console.log('AppComponent');
    }
}
AppComponent.decorators = [
    { type: Component, args: [{
                selector: 'my-app',
                template: `
    <h1>My First {{name}} {{1+1}} App</h1>
    `,
            },] },
];
AppComponent.ctorParameters = [];
//# sourceMappingURL=home.js.map