import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NothingBComponent } from './nothing-b/nothing-b.component';
import { InputAComponent } from './input-a/input-a.component';
import { InputCComponent } from './input-c/input-c.component';

@NgModule({
  declarations: [
    AppComponent,
    NothingBComponent,
    InputAComponent,
    InputCComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
