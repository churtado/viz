import { NgModule } from '@angular/core';
import { D3Module } from './../d3/d3.module';

import { DashService } from './dash.service';

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
    providers: [
        DashService,
    ],
})
export class DashModule { }
