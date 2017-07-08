import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VizContainerComponent } from './viz-container.component';
import { VizzesComponent } from './vizzes.component';
import { VegaVizComponent } from './vega-viz.component';

const routes: Routes = [
  { path: '', redirectTo: '/vizzes', pathMatch: 'full' },
  { path: 'vc', component: VizContainerComponent },
  { path: 'viz/:id', component: VegaVizComponent },
  { path: 'vizzes', component: VizzesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
