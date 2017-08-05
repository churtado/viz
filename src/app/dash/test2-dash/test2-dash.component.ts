import {
    Component, OnInit, AfterViewInit,
    Input, ViewChild, ElementRef,
    ComponentFactoryResolver,
    OnDestroy, ViewContainerRef
} from '@angular/core';
import { DashService } from './../dash.service';

import { Dash, D3Viz, Viz, VegaViz } from './../../viz';

import {
    D3MapComponent,
    D3SpiderChartComponent,
    D3UpdatePatternComponent,
} from './../../d3';

declare function require(name: string);
const vega = require('vega');
const vegaTooltip = require('vega-tooltip');

@Component({
    selector: 'app-dash',
    templateUrl: './test2-dash.component.html',
    styleUrls: ['./test2-dash.component.css'],
    entryComponents: [
        D3MapComponent,
        D3SpiderChartComponent,
        D3UpdatePatternComponent,
    ]
})
export class Test2DashComponent implements OnInit {

    /**
     * Here we define where our vizzes will go
     */
    @ViewChild('D3MapComponent', { read: ViewContainerRef }) mapComponentContainer: ViewContainerRef;
    @ViewChild('D3SpiderChartComponent', { read: ViewContainerRef }) spiderChartComponentContainer: ViewContainerRef;
    @ViewChild('D3UpdatePatternComponent', { read: ViewContainerRef }) updatePatternComponentContainer: ViewContainerRef;

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
                name: 'D3MapComponent',
                container: this.mapComponentContainer
            },
            {
                name: 'D3SpiderChartComponent',
                container: this.spiderChartComponentContainer
            },
            {
                name: 'D3UpdatePatternComponent',
                container: this.updatePatternComponentContainer
            }
        ];

        this.dashService.getDash(2).then((dash) => {
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
}
