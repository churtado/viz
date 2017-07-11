import { NgModule } from '@angular/core';

import {
    D3BarChartComponent,
    D3SpiderChartComponent,
    D3TutorialComponent,
} from './index';

@NgModule({
    imports: [],
    declarations: [
        D3BarChartComponent,
        D3SpiderChartComponent,
        D3TutorialComponent,
    ],
    exports: [
        D3BarChartComponent,
        D3SpiderChartComponent,
        D3TutorialComponent,
    ],
    providers: [],
})
export class D3Module { }
