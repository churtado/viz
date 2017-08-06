import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { D3Module } from './../d3/d3.module';

import { DashService } from './dash.service';

import * as dashes from './index';

@NgModule({
    imports: [
        CommonModule,
        D3Module,
    ],
    declarations: [
        dashes.TestDashComponent,
        dashes.Test2DashComponent,
        dashes.MappingDashComponent,
    ],
    exports: [
        dashes.TestDashComponent,
        dashes.Test2DashComponent,
        dashes.MappingDashComponent,
    ],
    providers: [
        DashService,
    ],
})
export class DashModule { }
