import {
    Component, OnInit, AfterViewInit,
    Input, ViewChild, ElementRef,
    ComponentFactoryResolver,
    OnDestroy, ViewContainerRef
} from '@angular/core';
import { DashService } from './../dash.service';

import { Dash, D3Viz, VegaViz, Viz } from './../../viz';


declare function require(name: string);
const vega = require('vega');
const vegaTooltip = require('vega-tooltip');

@Component({
    selector: 'app-dash',
    templateUrl: './population-pyramid-dash.component.html',
    styleUrls: ['./population-pyramid-dash.component.css'],
})
export class PopulationPyramidDashComponent implements OnInit {

    private dash: Dash;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private viewContainerRef: ViewContainerRef,
        private dashService: DashService,
    ) { }

    ngOnInit(): void {

        // get the vizzes used for the dashboard
        this.dashService.getDash(4).then((dash) => {
            this.dash = dash;

            this.dash.vegaVizzes.forEach((viz: VegaViz) => {
                this.renderViz(viz);
            })
        });

    }

    private renderViz(viz: VegaViz) {

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
