import { NgModule } from '@angular/core';
import { D3Module } from './../d3/d3.module';

import { DashService } from './dash.service';

import * as dashes from './index';

@NgModule({
    imports: [
        D3Module,
    ],
    declarations: [
        dashes.BarchartDashComponent,
        dashes.MapDashComponent,
        dashes.ThreeCirclesDashComponent,
        dashes.TutorialDashComponent,
        dashes.UpdatePatternDashComponent,
        dashes.SpiderChartDashComponent,
        dashes.GroupedBarDashComponent,
        dashes.NestedBarDashComponent,
        dashes.PopulationPyramidDashComponent,
        dashes.StackedBarDashComponent,
        dashes.ParallelAxisDashComponent,
    ],
    exports: [
        dashes.BarchartDashComponent,
        dashes.MapDashComponent,
        dashes.ThreeCirclesDashComponent,
        dashes.TutorialDashComponent,
        dashes.UpdatePatternDashComponent,
        dashes.SpiderChartDashComponent,
        dashes.GroupedBarDashComponent,
        dashes.NestedBarDashComponent,
        dashes.PopulationPyramidDashComponent,
        dashes.StackedBarDashComponent,
        dashes.ParallelAxisDashComponent,
    ],
    providers: [
        DashService,
    ],
})
export class DashModule { }
