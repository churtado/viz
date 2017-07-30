import {
    Component, OnInit, AfterViewInit,
    Input, ViewChild, ElementRef,
    ComponentFactoryResolver,
    OnDestroy, ViewContainerRef
} from '@angular/core';
import { DashService } from './../dash.service';

import { Dash, D3Viz, Viz } from './../../viz';
import { ALLVIZZES } from './../../mock-vizzes';

import {
    D3BarChartComponent,
} from './../../d3';

@Component({
    selector: 'app-dash',
    templateUrl: './groupedbar.component.html',
    styleUrls: ['./groupedbar.component.css'],
    entryComponents: [
        D3BarChartComponent,
    ]
})
export class TestDashComponent implements OnInit {

    /**
     * Here we define where our vizzes will go
     */
    @ViewChild('D3BarChartComponent', { read: ViewContainerRef }) barchartComponentContainer: ViewContainerRef;

    private dash: Dash;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private viewContainerRef: ViewContainerRef,
        private dashService: DashService,
    ) { }

    ngOnInit(): void {

        /**
         * building the list of child containers
         */
        const containers = [
            {
                name: 'D3BarChart',
                container: this.barchartComponentContainer
            }
        ];

        // get the vizzes used for the dashboard
        this.dashService.getDash(1).then((dash) => {
            this.dash = dash;

            this.dash.d3Vizzes.forEach((viz: D3Viz) => {
                this.insertViz(viz, containers);
            })
        });

    }

    private insertViz(
        viz: Viz,
        containers: { name: string, container: ViewContainerRef }[]) {
        const ref = this.viewContainerRef.createComponent(
            this.componentFactoryResolver.resolveComponentFactory(viz.component));

        ref.instance.viz = viz;
        containers.find((e) => e.name === viz.name).container.insert(ref.hostView);
    }

}
