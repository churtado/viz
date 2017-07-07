import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { VizService } from './viz.service';
import { Viz } from './viz';

declare function require(name: string);
const vega = require('vega');

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
        // get the viz
        this.route.paramMap
            .switchMap((params: ParamMap) => this.vizService.getViz(+params.get('id')))
            .subscribe((viz: Viz) => {
                this.viz = viz;
                this.vizService.getVegaSpec(this.viz.specUrl).subscribe((json) => {
                    // render the viz
                    const view = new vega.View(vega.parse(json))
                        .renderer('svg')  // set renderer (canvas or svg)
                        .initialize('#view') // initialize view within parent DOM container
                        .hover()             // enable hover encode set processing
                        .run();              // run the dataflow and render the view
                })
            });
    }

    goBack(): void {
        this.location.back();
    }
}
