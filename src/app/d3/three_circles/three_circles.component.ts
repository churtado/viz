import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { VizService } from './../../viz.service';
import { Viz } from './../../viz';
import {
    D3Service, D3,
    Selection, Axis,
    ScaleLinear, ScaleBand,
} from 'd3-ng2-service';

declare function require(name: string);
const d3 = require('d3');

@Component({
    moduleId: module.id,
    selector: 'app-d3tutorial',
    templateUrl: './three_circles.component.html',
    styleUrls: ['./three_circles.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class D3ThreeCirclesComponent implements OnInit {

    @Input() viz: Viz;

    constructor(
    ) { }

    ngOnInit(): void {

        /**
         * This is to understand what enter, update and exit do
         */

        const svg = d3.select('svg')
        let circle = svg.selectAll('circle')
            .data([32, 57, 112, 293]);
        circle.style('fill', 'steelblue');

        const circleEnter = circle.enter().append('circle');
        // circleEnter.style('fill', 'steelblue');
        circleEnter.attr('cy', 60);
        circleEnter.attr('cx', (d, i) => i * 100 + 30);
        circleEnter.attr('r', (d) => Math.sqrt(d));

        circle = svg.selectAll('circle')
            .data([32, 57])
            .exit().remove()

        circle = svg.selectAll('circle')
            .data([32, 57, 293], (d) => d)
            .enter().append('circle')
            .style('fill', 'steelblue')
            .attr('cy', 60)
            .attr('cx', (d, i) => i * 100 + 30)
            .attr('r', (d) => Math.sqrt(d));

        circle.exit().remove();
    }

}
