import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { VizContainerComponent }   from './viz-container.component';
import { VizzesComponent }      from './vizzes.component';
import { VizComponent }  from './viz.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/vizzes', pathMatch: 'full' },
  { path: 'vc',  component: VizContainerComponent },
  { path: 'viz/:id', component: VizComponent },
  { path: 'vizzes',     component: VizzesComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}