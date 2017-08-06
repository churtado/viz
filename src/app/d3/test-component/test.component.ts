import { Component, ElementRef, NgZone, OnDestroy, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { D3Viz } from './../../viz';
import {
    D3Service, D3,
    Selection, Axis,
    ScaleLinear, ScaleBand,
} from 'd3-ng2-service';

import { D3VizService } from './../d3Viz.service';

@Component({
    moduleId: module.id,
    selector: 'app-d3bar-chart',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class D3TestComponent implements OnInit, OnDestroy {

    private d3VizService: D3VizService;
    private d3: D3;
    private parentNativeElement: any;
    private d3Svg: Selection<SVGSVGElement, any, null, undefined>;

    viz: D3Viz;

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

            const color: any = d3.scaleOrdinal(d3.schemeCategory20);

            // layout
            const pie = d3.pie()
                .value((d: any) => d.apples)
                .sort(null);

            d3Svg.append('g')
                .attr('transform', `translate ${width / 2}, ${height / 2})`);
                

        }

    }

    ngOnDestroy() {
        if (this.d3Svg.empty && !this.d3Svg.empty()) {
            this.d3Svg.selectAll('*').remove();
        }
    }

}
