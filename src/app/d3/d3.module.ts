import { NgModule } from '@angular/core';

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
    providers: [],
})
export class D3Module { }
