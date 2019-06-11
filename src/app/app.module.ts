import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChiaLayoutComponent } from './chia-layout/chia-layout.component';

import {ChiaLayoutModule} from './chia-layout/chia-layout.module';

@NgModule({
  declarations: [
    AppComponent,
    ChiaLayoutComponent
  ],
  imports: [
    BrowserModule,
    ChiaLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
