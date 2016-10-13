import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './components';
export class MainModule {
    constructor() {
        console.log('MainModule');
    }
}
MainModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    BrowserModule,
                    CommonModule,
                    FormsModule,
                    HttpModule,
                    MaterialModule.forRoot()
                ],
                declarations: [AppComponent],
                bootstrap: [AppComponent]
            },] },
];
MainModule.ctorParameters = [];
//# sourceMappingURL=main.js.map