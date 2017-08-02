import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { AppComponent } from './app.component';
import { DashesComponent } from './dashes.component';
import { VizService } from './viz.service';

import { AppRoutingModule } from './app-routing.module';

import { DashModule } from './dash/dash.module'
import { D3Module } from './d3/d3.module';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    D3Module,
    DashModule,
  ],
  declarations: [
    AppComponent,
    ContactComponent,
    DashesComponent,
    AboutComponent,
  ],
  providers: [
    VizService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
