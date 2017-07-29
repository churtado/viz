import { NgModule } from '@angular/core';
import { D3Module } from './../d3/d3.module';

import {
    TestDashComponent,
} from './index';

@NgModule({
    imports: [
        D3Module,
    ],
    declarations: [
        TestDashComponent,
    ],
    exports: [
        TestDashComponent,
    ],
    providers: [],
})
export class DashModule { }
