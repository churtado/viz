import { NgModule } from '@angular/core';

import {
    D3BarChartComponent,
    D3SpiderChartComponent,
    D3TutorialComponent,
    D3ThreeCirclesComponent,
    D3UpdatePatternComponent,
} from './index';

@NgModule({
    imports: [],
    declarations: [
        D3BarChartComponent,
        D3SpiderChartComponent,
        D3TutorialComponent,
        D3ThreeCirclesComponent,
        D3UpdatePatternComponent,
    ],
    exports: [
        D3BarChartComponent,
        D3SpiderChartComponent,
        D3TutorialComponent,
        D3ThreeCirclesComponent,
        D3UpdatePatternComponent,
    ],
    providers: [],
})
export class D3Module { }
