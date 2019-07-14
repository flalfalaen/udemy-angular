import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// my created custom components
import { MyComponent } from './my/my.component';
import { MyOwnComponent } from './myOwn/myOwn.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    MyOwnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
