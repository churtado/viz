import {
    Component, OnInit, AfterViewInit,
    Input, ViewChild, ElementRef,
    ComponentFactoryResolver,
    OnDestroy, ViewContainerRef
} from '@angular/core';
import { Viz, D3Viz } from './../../viz';
import { ALLVIZZES, D3VIZZES } from './../../mock-vizzes';

import {
    D3BarChartComponent,
} from './../../d3';

@Component({
    selector: 'app-dash',
    templateUrl: './testdash.component.html',
    styleUrls: ['./testdash.component.css'],
    entryComponents: [
        D3BarChartComponent,
    ]
})
export class TestDashComponent implements OnInit {

    // @ViewChild('myname') input:ElementRef;
    @ViewChild('D3BarChartComponent', { read: ViewContainerRef }) dynamicComponentContainer: ViewContainerRef;

    private d3Vizzes: D3Viz[] = [];

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private viewContainerRef: ViewContainerRef,
    ) { }

    ngOnInit(): void {
        // get the vizzes used for the dashboard
        // this.d3Vizzes.push(D3VIZZES[0]);

        // attach the component to its div
        // for each viz you'll have to do this
        const factory = this.componentFactoryResolver
            .resolveComponentFactory(D3BarChartComponent);
        const ref = this.viewContainerRef.createComponent(factory);
        // ref.instance.viz = this.d3Vizzes[0];
        ref.instance.viz = D3VIZZES[0];
        this.dynamicComponentContainer.insert(ref.hostView);
    }

}
