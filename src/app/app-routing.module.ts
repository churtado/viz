import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VizzesComponent } from './vizzes.component';
import { DashesComponent } from './dashes.component';
import * as Dash from './dash/index';
import { VegaVizComponent } from './vega-viz.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';

// route definitions of all our dashboards
import { dashRouting } from './dash/route-definitions';

const routes: Routes = [
  { path: '', redirectTo: '/dashes', pathMatch: 'full' },
  { path: 'vega/:id', component: VegaVizComponent },
  { path: 'vizzes', component: VizzesComponent },
  { path: 'dashes', component: DashesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    dashRouting,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
