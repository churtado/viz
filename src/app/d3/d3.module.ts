import { NgModule } from '@angular/core';

import {
    D3BarChartComponent,
    D3SpiderChartComponent,
} from './index';

@NgModule({
    imports: [],
    declarations: [
        D3BarChartComponent,
        D3SpiderChartComponent,
    ],
    exports: [
        D3BarChartComponent,
        D3SpiderChartComponent,
    ],
    providers: [],
})
export class D3Module { }
