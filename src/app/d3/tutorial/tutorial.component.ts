import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { VizService } from './../../viz.service';
import { Viz } from './../../viz';

declare function require(name: string);
const d3 = require('d3');

@Component({
    moduleId: module.id,
    selector: 'app-d3tutorial',
    templateUrl: './tutorial.component.html',
    styleUrls: ['./tutorial.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class D3TutorialComponent implements OnInit {

    @Input() viz: Viz;

    constructor(
    ) { }

    ngOnInit(): void {

        // url of the data
        const url = 'http://localhost:4200/assets/spec/d3/tutorial/data.tsv'

        // select the svg object, specify margins
        const svg = d3.select('svg'),
            margin = { top: 20, right: 20, bottom: 30, left: 40 },
            width = +svg.attr('width') - margin.left - margin.right,
            height = +svg.attr('height') - margin.top - margin.bottom;

        // the scales for both axes, note the padding for the blank space between the bars
        const x = d3.scaleBand().rangeRound([0, width]).padding(0.1)
        const y = d3.scaleLinear().rangeRound([height, 0]);

        // this is for alignment purposes
        const g = svg.append('g')
            .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

        // get the data async, and the callback
        d3.tsv(url,
            (d) => {
                d.frequency = +d.frequency;
                return d;
            },
            (error, data) => {
                if (error) { throw error; }

                // set the domain for our scales
                x.domain(data.map((d) => d.letter))
                y.domain([0, d3.max(data, (d) => d.frequency)]);

                // set the x axis
                svg.append('g')
                    .attr('class', 'axis axis--x') // using css to spec visual properties
                    // shift the axis to the left, we'll do this for everything
                    .attr('transform', 'translate(' + margin.left + ',' + height + ')')
                    // make the axis
                    .call(d3.axisBottom(x));

                // set the y axis
                svg.append('g')
                    .attr('class', 'axis axis--y') // using css to spec visual properties
                    .attr('transform', 'translate(' + margin.left + ',0)')
                    .call(d3.axisLeft(y).ticks(10, '%'))
                  .append('text') // this should add the text but some css is missing, oh well
                    .attr('transform', 'rotate(-90)')
                    .attr('y', 6)
                    .attr('dy', '0.71em')
                    .attr('text-anchor', 'end')
                    .text('Frequency')

                // add the actual bar
                svg.selectAll('.bar')
                    // this is our data
                    .data(data)
                    // for each piece of data
                    .enter().append('rect')
                    // shift the bar to the left
                    .attr('transform', 'translate(' + margin.left + ',0)')
                    // for css
                    .attr('class', 'bar')
                    // position it on the x axis according to the scale
                    .attr('x', (d) => x(d.letter))
                    // position it on the y axis, remember svg (0,0) is the top
                    .attr('y', (d) => y(d.frequency))
                    // give it a width
                    .attr('width', x.bandwidth())
                    /**
                     * since the 'height' starts at the top,
                     * we basically anchor each bar to the top position,
                     * which we did in the attr('y'). To 'prolong' the bar
                     * downwards, we need the difference to get the bar down
                     * to zero, and make the bar chart 'zero' based
                     */
                    .attr('height', (d) => height - y(d.frequency))

            }
        )
    }

}
