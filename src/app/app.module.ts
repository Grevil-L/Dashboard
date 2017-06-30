import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FrameComponent } from './frame/frame.component';
import { TopComponent } from './frame/top/top.component';
import { DashComponent } from './frame/dash/dash.component';

@NgModule({
  declarations: [
    AppComponent,
    FrameComponent,
    TopComponent,
    DashComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
