import {
    Component,
    ComponentFactoryResolver,
    ViewContainerRef,
    Input, AfterViewInit,
    OnDestroy, ViewChild
} from '@angular/core';

// this is temporary, remove it ASAP, when you remove the example
import { D3BarChartComponent } from './d3/bar_chart/bar-chart.component';

@Component({
    selector: 'app-d3-viz',
    templateUrl: './d3-viz.component.html',
})
export class D3VizComponent implements AfterViewInit {

    viz = {
        id: 7,
        name: 'Bar Chart',
        description: 'A bar chart in d3',
        type: 'd3',
        component: D3BarChartComponent
    }

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private viewContainerRef: ViewContainerRef
    ) { }


    ngAfterViewInit() {
        const factory = this.componentFactoryResolver.resolveComponentFactory(D3BarChartComponent);
        const ref = this.viewContainerRef.createComponent(factory);
        ref.changeDetectorRef.detectChanges();
    }

}
