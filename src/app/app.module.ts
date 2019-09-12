import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DecodeService } from './services/decode.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DecodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
