import { Component, ElementRef, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { VizService } from './../../viz.service';
import { D3Viz } from './../../viz';
import {
    D3Service, D3,
    Selection, Axis,
    ScaleLinear, ScaleBand,
} from 'd3-ng2-service';

// declare function require(name: string);
// const d3 = require('d3');

@Component({
    moduleId: module.id,
    selector: 'app-d3-updatepattern',
    templateUrl: './update_pattern.component.html',
    styleUrls: ['./update_pattern.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class D3UpdatePatternComponent implements OnInit {

    private d3: D3;
    private parentNativeElement: any;
    private d3Svg: Selection<SVGSVGElement, any, null, undefined>;

    @Input() viz: D3Viz;

    constructor(
        element: ElementRef,
        d3Service: D3Service,
    ) {
        this.d3 = d3Service.getD3();
        this.parentNativeElement = element.nativeElement;
    }

    ngOnInit(): void {

        const self = this;
        const d3 = this.d3;
        let d3ParentElement: Selection<HTMLElement, any, null, undefined>;
        let d3Svg: Selection<SVGSVGElement, any, null, undefined>;

        if (this.parentNativeElement !== null) {

            let width = this.viz.graphWidth,
                height = this.viz.graphHeight;

            const margins = this.viz.margins;

            d3ParentElement = d3.select(this.parentNativeElement);
            d3Svg = this.d3Svg = d3ParentElement.select<SVGSVGElement>('svg');

            this.d3Svg.attr('width', width);
            this.d3Svg.attr('height', height);

            width = width - (margins.left + margins.right),
                height = height - (margins.top + margins.bottom);

            const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

            const g = this.d3Svg.append('g').
                attr('transform', `translate(32, ${height / 2})`)

            function update(data) {
                const t = d3.transition('transition').duration(750);

                // join new data with old elements if any
                const text = g.selectAll('text')
                    // key function to return the letter
                    .data(data, (d: any) => d);

                // exit old elements not in data
                text.exit()
                    .attr('class', 'exit')
                    .transition(t)
                    .attr('y', 60)
                    .style('fill-opacity', 1e-6)
                    .remove();

                // update old elements present in new data
                text.attr('class', 'update')
                    .attr('y', 0)
                    .style('fill-opacity', 1)
                    .transition(t)
                    .attr('x', (d, i) => i * 32);

                // enter to create new elments as needed
                // enter and update after mergin elements with the update selection
                // and apply operations to both
                text.enter().append('text')
                    .attr('class', 'enter')
                    .attr('dy', '.35em')
                    .attr('y', -60)
                    .attr('x', (d, i) => i * 32)
                    .style('fill-opacity', 1e-6)
                    .text((d: any) => {
                        return d;
                    })
                    .transition(t)
                    .attr('y', 0)
                    .style('fill-opacity', 1)

            }

            d3.interval(() => {
                update(d3.shuffle(alphabet)
                    .slice(0, Math.floor(Math.random() * 26))
                    .sort());
            }, 1500);
        }

    }

}
