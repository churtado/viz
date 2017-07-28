import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { D3Service } from 'd3-ng2-service';
import { VizService } from './../viz.service';
import { D3VizService } from './d3Viz.service';

import {
    D3BarChartComponent,
    D3SpiderChartComponent,
    D3TutorialComponent,
    D3ThreeCirclesComponent,
    D3UpdatePatternComponent,
    D3MapComponent,
} from './index';

@NgModule({
    imports: [],
    declarations: [
        D3BarChartComponent,
        D3SpiderChartComponent,
        D3TutorialComponent,
        D3ThreeCirclesComponent,
        D3UpdatePatternComponent,
        D3MapComponent,
    ],
    exports: [
        D3BarChartComponent,
        D3SpiderChartComponent,
        D3TutorialComponent,
        D3ThreeCirclesComponent,
        D3UpdatePatternComponent,
        D3MapComponent,
    ],
    providers: [
        HttpModule,
        D3VizService,
        D3Service,
    ],
})
export class D3Module { }
