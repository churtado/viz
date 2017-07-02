import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { VegaComponent } from './vega/vega.component';

@NgModule({
  declarations: [
    AppComponent,
    VegaComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'vega',
        component: VegaComponent
      }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
