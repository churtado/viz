import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { VizService } from './../../viz.service';
import { Viz } from './../../viz';

import { D3Component } from './../../d3.component';

declare function require(name: string);
const d3 = require('d3v4');

@Component({
    selector: 'app-d3bar-chart',
    templateUrl: './bar-chart.component.html',
})
export class D3BarChartComponent implements OnInit, D3Component {

    @Input() viz: Viz;

    constructor(
    ) { }

    ngOnInit(): void {

        const svg = d3.select('svg'),
            margin = { top: 20, right: 20, bottom: 30, left: 40 },
            width = +svg.attr('width') - margin.left - margin.right,
            height = +svg.attr('height') - margin.top - margin.bottom;

        const x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
            y = d3.scaleLinear().rangeRound([height, 0]);

        const g = svg.append('g')
            .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

        d3.tsv('./../../../assets/spec/d3/simple_bar/data.tsv', function (d) {
            d.frequency = +d.frequency;
            return d;
        }, function (error, data) {
            if (error) { throw error; }

            x.domain(data.map(function (d) { return d.letter; }));
            y.domain([0, d3.max(data, function (d) { return d.frequency; })]);

            g.append('g')
                .attr('class', 'axis axis--x')
                .attr('transform', 'translate(0,' + height + ')')
                .call(d3.axisBottom(x));

            g.append('g')
                .attr('class', 'axis axis--y')
                .call(d3.axisLeft(y).ticks(10, '%'))
                .append('text')
                .attr('transform', 'rotate(-90)')
                .attr('y', 6)
                .attr('dy', '0.71em')
                .attr('text-anchor', 'end')
                .text('Frequency');

            g.selectAll('.bar')
                .data(data)
                .enter().append('rect')
                .attr('class', 'bar')
                .attr('x', function (d) { return x(d.letter); })
                .attr('y', function (d) { return y(d.frequency); })
                .attr('width', x.bandwidth())
                .attr('height', function (d) { return height - y(d.frequency); });
        });

    }

}
