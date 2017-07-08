import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { VizService } from './viz.service';
import { Viz } from './viz';

declare function require(name: string);
const vega = require('vega');
const vegaTooltip = require('vega-tooltip');

@Component({
    selector: 'app-viz',
    templateUrl: './viz.component.html',
})
export class VizComponent implements OnInit {
    @Input() viz: Viz;

    constructor(
        private vizService: VizService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        // get the viz id from the url parameter passed in
        this.route.paramMap
            // get the viz object observable
            .switchMap((params: ParamMap) => this.vizService.getViz(+params.get('id')))
            // subscribe to get the viz value
            .subscribe((viz: Viz) => {
                // attach it to the component
                this.viz = viz;
                // render vega component
                this.vizService.getVegaSpec(this.viz.specUrl).subscribe((json) => {

                    // create runtime dataflow of the viz
                    const runtime = vega.parse(json);
                    // render the viz
                    const view = new vega.View(runtime)
                        .renderer('svg')  // set renderer (canvas or svg)
                        .initialize('#view') // initialize view within parent DOM container
                        .hover()             // enable hover encode set processing
                        .run();              // run the dataflow and render the view

                    // options for vega tooltip
                    const options = {
                        mode: 'vega'
                    }
                    vegaTooltip.vega(view);
                })
            });
    }

    goBack(): void {
        this.location.back();
    }
}
