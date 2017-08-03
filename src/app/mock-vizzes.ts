import {
    D3Viz,
    VegaViz,
    Dash
} from './viz';

import * as d3Vizzes from './d3';
import * as dashes from './dash';

export const DASHES: Dash[] = [
    {
        id: 1,
        name: 'Test dashboard',
        description: 'Testing Vega and D3 components',
        url: 'test',
        component: dashes.TestDashComponent,
        d3Vizzes: [
            {
                id: 1,
                name: 'D3BarChart',
                component: d3Vizzes.D3BarChartComponent,
                dataUrl: 'http://localhost:4200/assets/spec/d3/simple_bar/data.tsv',
                graphWidth: 400,
                graphHeight: 400,
                margins: { top: 20, right: 20, bottom: 30, left: 40 }
            },
        ],
        vegaVizzes: [
            {
                id: 1,
                name: 'Grouped Bar',
                specUrl: 'http://localhost:4200/assets/spec/vega/grouped_bar/spec.vg.json',
                tooltipSpecUrl: 'http://localhost:4200/assets/spec/vega/grouped_bar/tooltip.json',
                containerId: 'groupedBar'
            },
            {
                id: 2,
                name: 'Nested Bar',
                specUrl: 'http://localhost:4200/assets/spec/vega/nested_bar/spec.vg.json',
                tooltipSpecUrl: 'http://localhost:4200/assets/spec/vega/nested_bar/tooltip.json',
                containerId: 'nestedBar'
            },
            {
                id: 3,
                name: 'Population Pyramid',
                specUrl: 'http://localhost:4200/assets/spec/vega/population_pyramid/spec.vg.json',
                tooltipSpecUrl: 'http://localhost:4200/assets/spec/vega/population_pyramid/tooltip.json',
                containerId: 'populationPyramid'
            },
            {
                id: 4,
                name: 'Stacked Bar',
                specUrl: 'http://localhost:4200/assets/spec/vega/stacked_bar/spec.vg.json',
                tooltipSpecUrl: 'http://localhost:4200/assets/spec/vega/stacked_bar/tooltip.json',
                containerId: 'stackedBar'
            },
            {
                id: 5,
                name: 'Parallel Axis',
                specUrl: 'http://localhost:4200/assets/spec/vega/parallel_axis/spec.vg.json',
                tooltipSpecUrl: 'http://localhost:4200/assets/spec/vega/parallel_axis/tooltip.json',
                containerId: 'parallelAxis'
            }
        ]
    },
    {
        id: 2,
        name: 'Test dashboard 2',
        description: 'Mostly d3 stuff',
        url: 'test2',
        component: dashes.Test2DashComponent,
        d3Vizzes: [
            {
                id: 1,
                name: 'D3MapComponent',
                component: d3Vizzes.D3MapComponent,
                dataUrl: '',
                graphWidth: 800,
                graphHeight: 600,
                margins: { top: 20, right: 20, bottom: 30, left: 40 }
            },
            {
                id: 2,
                name: 'D3SpiderChartComponent',
                component: d3Vizzes.D3SpiderChartComponent,
                dataUrl: '',
                graphWidth: 350,
                graphHeight: 400,
                margins: { top: 20, right: 20, bottom: 30, left: 40 }
            }
        ],
        vegaVizzes: []
    }
];
