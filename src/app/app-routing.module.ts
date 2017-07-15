import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VizzesComponent } from './vizzes.component';
import { DashesComponent } from './dashes.component';
import { DashComponent } from './dash/dash.component';
import { VegaVizComponent } from './vega-viz.component';
import { D3VizComponent } from './d3-viz.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashes', pathMatch: 'full' },
  { path: 'vega/:id', component: VegaVizComponent },
  { path: 'd3/:id', component: D3VizComponent },
  { path: 'vizzes', component: VizzesComponent },
  { path: 'dashes', component: DashesComponent },
  { path: 'dash/:id', component: DashComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
