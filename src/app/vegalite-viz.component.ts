import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { VizService } from './viz.service';
import { Viz } from './viz';

declare function require(name: string);
const vega = require('vega');
const vegaLite = require('vega-lite');
const vegaTooltip = require('vega-tooltip');
vega.embed = require('vega-embed');

@Component({
    selector: 'app-vegalite-viz',
    templateUrl: './vegalite-viz.component.html',
})
export class VegaliteVizComponent implements OnInit {
    @Input() viz: Viz;

    constructor(
        private vizService: VizService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {


        const spec = {
            '$schema': 'https://vega.github.io/schema/vega-lite/v2.0.json',
            'description': 'A simple bar chart with embedded data.',
            'data': {
                'values': [
                    { 'a': 'A', 'b': 28 }, { 'a': 'B', 'b': 55 }, { 'a': 'C', 'b': 43 },
                    { 'a': 'D', 'b': 91 }, { 'a': 'E', 'b': 81 }, { 'a': 'F', 'b': 53 },
                    { 'a': 'G', 'b': 19 }, { 'a': 'H', 'b': 87 }, { 'a': 'I', 'b': 52 }
                ]
            },
            'mark': 'bar',
            'encoding': {
                'x': { 'field': 'a', 'type': 'ordinal' },
                'y': { 'field': 'b', 'type': 'quantitative' }
            }
        }

        const options = {
            'mode': 'vega-lite',
             'renderer': 'svg',
            // 'padding': { left: 0, top: 0, right: 0, bottom: 0 },
            'actions': false
        };

        // const tooltipOptions = {
        //     showAllFields: true,
        //     fields: [
        //         {
        //             field: 'a',
        //             title: 'Field a',
        //             formatType: 'string'
        //         }]
        // };

        vega.embed('#view', spec, options).then((error, result) => {
            vegaTooltip.vegaLite(result.view, spec);
        });
        // vegaTooltip.vegaLite('#view', spec);

    }

    goBack(): void {
        this.location.back();
    }
}
