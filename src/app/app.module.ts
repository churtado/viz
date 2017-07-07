import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VizzesComponent } from './vizzes.component';
import { VizComponent } from './viz.component';
import { VizService } from './viz.service';
import { VizContainerComponent } from './viz-container.component';

import { AppRoutingModule } from './app-routing.module';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    VizzesComponent,
    VizComponent,
    VizContainerComponent,
  ],
  providers: [
    VizService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
