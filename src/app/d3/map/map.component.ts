import { Component, ElementRef, NgZone, OnDestroy, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { VizService } from './../../viz.service';
import { D3Viz } from './../../viz';

import {
    D3Service, D3,
    Selection, Axis,
    ScaleLinear, ScaleBand,
} from 'd3-ng2-service';


import { D3VizService } from './../d3Viz.service';


// declare function require(name: string);
// const d3 = require('d3');

@Component({
    moduleId: module.id,
    selector: 'app-d3map-chart',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class D3MapComponent implements OnInit {

    private d3VizService: D3VizService;
    private d3: D3;
    private parentNativeElement: any;
    private d3Svg: Selection<SVGSVGElement, any, null, undefined>;

    @Input() viz: D3Viz;

    constructor(
        element: ElementRef,
        private ngZone: NgZone,
        d3Service: D3Service,
        d3VizService: D3VizService
    ) {
        this.d3 = d3Service.getD3();
        this.parentNativeElement = element.nativeElement;
        this.d3VizService = d3VizService;
    }

    ngOnInit(): void {

        const self = this;
        const d3 = this.d3;
        let d3ParentElement: Selection<HTMLElement, any, null, undefined>;
        let d3Svg: Selection<SVGSVGElement, any, null, undefined>;

        if (this.parentNativeElement !== null) {

            const width = this.viz.graphWidth,
                height = this.viz.graphHeight;

            const margins = this.viz.margins;

            d3ParentElement = d3.select(this.parentNativeElement);
            d3Svg = this.d3Svg = d3ParentElement.select<SVGSVGElement>('svg');

            this.d3Svg.attr('width', width);
            this.d3Svg.attr('height', height);

            const g = d3Svg.append('g');

            const mercatorProjection = d3.geoMercator()
                .center([50, 52])
                .translate([0, height / 2.5])
                .scale(800)
                .rotate([71.057, 0]);

            const geoPath = d3.geoPath()
                .projection(mercatorProjection);


            this.d3VizService.getD3Json(this.viz.dataUrl).subscribe((data) => {

                g.selectAll('path')
                    .data(data.features)
                    .enter()
                    .append('path')
                    .attr('fill', '#ccc')
                    .attr('d', geoPath)
                    .attr('stroke', 'rgba(8, 81, 156, 0.2)')
                    .attr('fill', 'rgba(8, 81, 156, 0.6)');

            });

        }

    }

}
