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
    templateUrl: './grouped-bar-dash.component.html',
    styleUrls: ['./grouped-bar-dash.component.css'],
})
export class GroupedBarDashComponent implements OnInit, OnDestroy {

    private dash: Dash;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private viewContainerRef: ViewContainerRef,
        private dashService: DashService,
        private elementRef: ElementRef
    ) { }

    ngOnInit(): void {

        // get the vizzes used for the dashboard
        this.dashService.getDash(2).then((dash) => {
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

    ngOnDestroy() {
        document.getElementById('vis-tooltip').remove();
    }

}
