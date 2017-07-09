import {
    Component,
    ComponentFactoryResolver,
    Input, AfterViewInit,
    OnDestroy, ViewChild
} from '@angular/core';

import { D3Directive } from './d3.directive';

// this is temporary, remove it ASAP, when you remove the example
import { D3Component } from './d3.component';
import { D3BarChartComponent } from './d3/bar_chart/bar-chart.component';

@Component({
    selector: 'app-d3-viz',
    templateUrl: './d3-viz.component.html',
})
export class D3VizComponent implements AfterViewInit {
    @ViewChild(D3Directive) d3Viz: D3Directive;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver
    ) { }

    ngAfterViewInit(): void {
        this.loadComponent();
    }

    loadComponent() {
        const viz = {
            id: 7,
            name: 'Bar Chart',
            description: 'A bar chart in d3',
            type: 'd3',
            component: D3BarChartComponent
        }

        const data2 = [1, 2];
        const componentFactory = this.
            componentFactoryResolver.resolveComponentFactory(viz.component)

        const viewContainerRef = this.d3Viz.viewContainerRef;
        viewContainerRef.clear();

        const componentRef = viewContainerRef.createComponent(componentFactory);
        (<D3Component>componentRef.instance).data = data2;
    }
}
