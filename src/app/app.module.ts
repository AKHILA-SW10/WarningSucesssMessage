import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WarningComponent } from 'src/WarningAlert/warning.component';

import { AppComponent } from './app.component';
import { SuccessComponent } from 'src/SuccessAlert/success.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    WarningComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
