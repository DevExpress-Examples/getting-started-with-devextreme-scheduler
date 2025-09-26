import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { DxSchedulerModule } from 'devextreme-angular/ui/scheduler';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DxSchedulerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
