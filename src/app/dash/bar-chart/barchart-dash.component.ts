import {
    Component, OnInit, AfterViewInit,
    Input, ViewChild, ElementRef,
    ComponentFactoryResolver,
    OnDestroy, ViewContainerRef
} from '@angular/core';
import { DashService } from './../dash.service';

import { Dash, D3Viz, VegaViz } from './../../viz';

import {
    D3BarChartComponent,
} from './../../d3';

declare function require(name: string);
const vega = require('vega');
const vegaTooltip = require('vega-tooltip');

@Component({
    selector: 'app-dash',
    templateUrl: './barchart-dash.component.html',
    styleUrls: ['./barchart-dash.component.css'],
    entryComponents: [
        D3BarChartComponent,
    ]
})
export class BarchartDashComponent implements OnInit, OnDestroy {

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

        this.renderDash();

    }

    private renderDash() {

        /**
         * building the list of child containers
         */
        const containers = [
            {
                name: 'D3BarChart',
                container: this.barchartComponentContainer
            }
        ];

        this.dashService.getDash(1).then((dash) => {
            this.dash = dash;

            this.dash.d3Vizzes.forEach((viz: D3Viz) => {
                this.insertD3Viz(viz, containers);
            })

            this.dash.vegaVizzes.forEach((viz: VegaViz) => {
                this.renderVegaViz(viz);
            })
        });
    }

    private insertD3Viz(
        viz: D3Viz,
        containers: { name: string, container: ViewContainerRef }[]) {
        const ref = this.viewContainerRef.createComponent(
            this.componentFactoryResolver.resolveComponentFactory(viz.component));

        ref.instance.viz = viz;
        containers.find((e) => e.name === viz.name).container.insert(ref.hostView);
    }

    private renderVegaViz(viz: VegaViz) {

        // render vega component
        this.dashService.getVegaSpec(viz).subscribe((json) => {

            // create runtime dataflow of the viz
            const runtime = vega.parse(json);

            // render the viz
            const view = new vega.View(runtime)
                .renderer('svg')  // set renderer (canvas or svg)
                .initialize(`#${viz.containerId}`) // initialize view within parent DOM container
                .hover()             // enable hover encode set processing
                .run();              // run the dataflow and render the view

            this.dashService
                .getVegaTooltipSpec(viz)
                .subscribe((tooltipOptions) => {
                    vegaTooltip.vega(view, tooltipOptions);
                });

        })
    }

    ngOnDestroy() {
        const tt = document.getElementById('vis-tooltip');
        if (tt) {
            document.getElementById('vis-tooltip').remove();
        }
    }

}
