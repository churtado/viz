import { NgModule } from '@angular/core';

import {
    D3BarChartComponent,
    D3SpiderChartComponent,
    D3TutorialComponent,
    D3ThreeCirclesComponent,
    D3UpdatePatternComponent,
    D3ObjectConstancyComponent,
} from './index';

@NgModule({
    imports: [],
    declarations: [
        D3BarChartComponent,
        D3SpiderChartComponent,
        D3TutorialComponent,
        D3ThreeCirclesComponent,
        D3UpdatePatternComponent,
        D3ObjectConstancyComponent,
    ],
    exports: [
        D3BarChartComponent,
        D3SpiderChartComponent,
        D3TutorialComponent,
        D3ThreeCirclesComponent,
        D3UpdatePatternComponent,
        D3ObjectConstancyComponent,
    ],
    providers: [],
})
export class D3Module { }
