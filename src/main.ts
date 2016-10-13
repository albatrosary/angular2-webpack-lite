import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import { MdCardModule } from '@angular2-material/card';
// import { MdButtonModule } from '@angular2-material/button';
// import { MdIconModule } from '@angular2-material/icon';
// import { MdIconRegistry } from '@angular2-material/icon';

import { AppComponent } from './components';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class MainModule {
  constructor() {
    console.log('MainModule');
  }
}