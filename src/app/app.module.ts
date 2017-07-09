import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VizzesComponent } from './vizzes.component';
import { VegaVizComponent } from './vega-viz.component';
import { D3VizComponent } from './d3-viz.component';
import { VizService } from './viz.service';
import { VizContainerComponent } from './viz-container.component';

import { AppRoutingModule } from './app-routing.module';

// this has to be removed somehow
import { D3BarChartComponent } from './d3/bar_chart/bar-chart.component';

import { D3Module } from './d3/d3.module';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    D3Module,
  ],
  declarations: [
    AppComponent,
    VizzesComponent,
    VegaVizComponent,
    D3VizComponent,
    VizContainerComponent,
  ],
  providers: [
    VizService
  ],
  entryComponents: [D3BarChartComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
