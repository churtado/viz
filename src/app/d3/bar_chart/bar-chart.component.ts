import { Component, ElementRef, NgZone, OnDestroy, OnInit, Input } from '@angular/core';
import { VizService } from './../../viz.service';
import { Viz } from './../../viz';
import {
    D3Service, D3,
    Selection, Axis,
    ScaleLinear, ScaleBand,
} from 'd3-ng2-service';

// declare function require(name: string);
// const d3 = require('d3');

@Component({
    moduleId: module.id,
    selector: 'app-d3bar-chart',
    templateUrl: './bar-chart.component.html',
    styleUrls: ['./bar-chart.component.css']
})
export class D3BarChartComponent implements OnInit, OnDestroy {

    private d3: D3;
    private parentNativeElement: any;
    private d3Svg: Selection<SVGSVGElement, any, null, undefined>;
    private vizService;

    @Input() viz: Viz;

    constructor(
        element: ElementRef,
        private ngZone: NgZone,
        d3Service: D3Service,
        vizService: VizService
    ) {
        this.d3 = d3Service.getD3();
        this.parentNativeElement = element.nativeElement;
        this.vizService = vizService;
    }

    ngOnInit(): void {

        const self = this;
        const d3 = this.d3;
        let d3ParentElement: Selection<HTMLElement, any, null, undefined>;
        let d3Svg: Selection<SVGSVGElement, any, null, undefined>;

        if (this.parentNativeElement !== null) {

            let width = 400,
                height = 400;

            const margin = { top: 20, right: 20, bottom: 30, left: 40 };

            d3ParentElement = d3.select(this.parentNativeElement);
            d3Svg = this.d3Svg = d3ParentElement.select<SVGSVGElement>('svg');

            this.d3Svg.attr('width', width);
            this.d3Svg.attr('height', height);

            width = width - (margin.left + margin.right),
                height = height - (margin.top + margin.bottom);

            const data = [{ letter: 'a', frequency: .2 }, { letter: 'b', frequency: .3 }];

            const x: ScaleBand<string> = d3.scaleBand().rangeRound([0, width]).padding(0.1);
            const y: ScaleLinear<number, number> = d3.scaleLinear().rangeRound([height, 0]);

            const d3G: Selection<SVGGElement, any, null, undefined> =
                d3Svg.append<SVGGElement>('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

            this.vizService.getD3Data()

            x.domain(data.map((d) => d.letter));
            y.domain([0, d3.max(data, (d)  => d.frequency )]);

            d3G.append('g')
                .attr('class', 'axis axis--x')
                .attr('transform', 'translate(0,' + height + ')')
                .call(d3.axisBottom(x));

            d3G.append('g')
                .attr('class', 'axis axis--y')
                .call(d3.axisLeft(y).ticks(10, '%'))
                .append('text')
                .attr('transform', 'rotate(-90)')
                .attr('y', 6)
                .attr('dy', '0.71em')
                .attr('text-anchor', 'end')
                .text('Frequency');

            d3G.selectAll('.bar')
                .data(data)
                .enter().append('rect')
                .attr('class', 'bar')
                .attr('x', function (d) { return x(d.letter); })
                .attr('y', function (d) { return y(d.frequency); })
                .attr('width', x.bandwidth())
                .attr('height', function (d) { return height - y(d.frequency); });

        }

    }

    ngOnDestroy() {
        if (this.d3Svg.empty && !this.d3Svg.empty()) {
            this.d3Svg.selectAll('*').remove();
        }
    }

}
