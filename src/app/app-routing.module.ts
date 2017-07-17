import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VizzesComponent } from './vizzes.component';
import { DashesComponent } from './dashes.component';
import * as Dash from './dash/index';
import { VegaVizComponent } from './vega-viz.component';
import { VegaliteVizComponent } from './vegalite-viz.component';
import { D3VizComponent } from './d3-viz.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashes', pathMatch: 'full' },
  { path: 'vega/:id', component: VegaVizComponent },
  { path: 'vegalite/:id', component: VegaliteVizComponent },
  { path: 'd3/:id', component: D3VizComponent },
  { path: 'vizzes', component: VizzesComponent },
  { path: 'dashes', component: DashesComponent },
  { path: 'testdash', component: Dash.TestDashComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
