import { Component, Input, OnInit } from '@angular/core';
import { VizService } from './../../viz.service';
import { Viz } from './../../viz';

declare function require(name: string);
const d3 = require('d3');

@Component({
    moduleId: module.id,
    selector: 'app-d3-updatepattern',
    templateUrl: './update_pattern.component.html',
    styleUrls: ['./update_pattern.component.css']
})
export class D3UpdatePatternComponent implements OnInit {

    @Input() viz: Viz;

    constructor(
    ) { }

    ngOnInit(): void {

        const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

        const svg = d3.select('svg'),
            width = +svg.attr('width'),
            height = +svg.attr('height'),
            g = svg.append('g').attr('transform', 'translate(32,' +
                (height / 2) + ')')

        function update(data) {
            const t = d3.transition().duration(750);

            // join new data with old elements if any
            const text = g.selectAll('text')
                // key function to return the letter
                .data(data, (d) => d);

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
                .text((d) => d)
              .transition(t)
                .attr('y', 0)
                .style('fill-opacity', 1)

            // remove old elements as needed
            // text.exit().remove()
        }

        update(alphabet);

        d3.interval(() => {
            update(d3.shuffle(alphabet)
                .slice(0, Math.floor(Math.random() * 26))
                .sort());
        }, 1500);

    }

}
