import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// my created custom components
import { MyComponent } from './my/my.component';
import { MyOwnComponent } from './myOwn/myOwn.component';
import { My2Component } from './my2/my2.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    MyOwnComponent,
    My2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
