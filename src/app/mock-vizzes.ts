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
        name: 'Bar chart',
        description: 'A bar chart in d3',
        url: 'bar_chart',
        component: dashes.BarchartDashComponent,
        d3Vizzes: [
            {
                id: 7,
                name: 'D3BarChart',
                component: d3Vizzes.D3BarChartComponent,
                dataUrl: 'http://localhost:4200/assets/spec/d3/simple_bar/data.tsv',
                graphWidth: 800,
                graphHeight: 600,
                margins: { top: 20, right: 20, bottom: 30, left: 40 }
            },
        ],
        vegaVizzes: []
    },
    {
        id: 2,
        name: 'Grouped Bar',
        description: 'A grouped bar chart in vega',
        url: 'grouped-bar',
        component: dashes.GroupedBarDashComponent,
        d3Vizzes: [],
        vegaVizzes: [
            {
                id: 1,
                name: 'Grouped Bar',
                specUrl: 'http://localhost:4200/assets/spec/vega/grouped_bar/spec.vg.json',
                tooltipSpecUrl: 'http://localhost:4200/assets/spec/vega/grouped_bar/tooltip.json',
                containerId: 'groupedBar',
                component: d3Vizzes.D3BarChartComponent
            }
        ]
    },
    {
        id: 3,
        name: 'Nested Bar',
        description: 'A nested bar chart in vega',
        url: 'nested_bar',
        component: dashes.NestedBarDashComponent,
        d3Vizzes: [ ],
        vegaVizzes: [
            {
                id: 1,
                name: 'Nested Bar',
                specUrl: 'http://localhost:4200/assets/spec/vega/nested_bar/spec.vg.json',
                tooltipSpecUrl: 'http://localhost:4200/assets/spec/vega/nested_bar/tooltip.json',
                containerId: 'groupedBar',
                component: d3Vizzes.D3BarChartComponent
            }
        ]
    },
    {
        id: 4,
        name: 'Population Pyramid',
        description: 'A population pyramid chart in vega',
        url: 'population_pyramid',
        component: dashes.PopulationPyramidDashComponent,
        d3Vizzes: [ ],
        vegaVizzes: [
            {
                id: 1,
                name: 'Population Pyramid',
                specUrl: 'http://localhost:4200/assets/spec/vega/population_pyramid/spec.vg.json',
                tooltipSpecUrl: 'http://localhost:4200/assets/spec/vega/population_pyramid/tooltip.json',
                containerId: 'groupedBar',
                component: d3Vizzes.D3BarChartComponent
            }
        ]
    },
    {
        id: 5,
        name: 'Stacked Bar',
        description: 'Astacked bar chart in vega',
        url: 'stacked_bar',
        component: dashes.StackedBarDashComponent,
        d3Vizzes: [ ],
        vegaVizzes: [
            {
                id: 1,
                name: 'Population Pyramid',
                specUrl: 'http://localhost:4200/assets/spec/vega/stacked_bar/spec.vg.json',
                tooltipSpecUrl: 'http://localhost:4200/assets/spec/vega/stacked_bar/tooltip.json',
                containerId: 'groupedBar',
                component: d3Vizzes.D3BarChartComponent
            }
        ]
    },
    {
        id: 6,
        name: 'Map',
        description: 'A map in d3 using topojson',
        url: 'map',
        component: dashes.MapDashComponent,
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
        ],
        vegaVizzes: []
    },
    {
        id: 7,
        name: '3 circles',
        description: '3 circles in d3',
        url: 'three_circles',
        component: dashes.ThreeCirclesDashComponent,
        d3Vizzes: [
            {
                id: 1,
                name: 'D3ThreeCirclesComponent',
                component: d3Vizzes.D3ThreeCirclesComponent,
                dataUrl: '',
                graphWidth: 800,
                graphHeight: 600,
                margins: { top: 20, right: 20, bottom: 30, left: 40 }
            },
        ],
        vegaVizzes: []
    },
    {
        id: 8,
        name: 'Tutorial',
        description: 'A tutorial in d3',
        url: 'tutorial',
        component: dashes.TutorialDashComponent,
        d3Vizzes: [
            {
                id: 1,
                name: 'D3TutorialComponent',
                component: d3Vizzes.D3TutorialComponent,
                dataUrl: '',
                graphWidth: 800,
                graphHeight: 600,
                margins: { top: 20, right: 20, bottom: 30, left: 40 }
            },
        ],
        vegaVizzes: []
    },
    {
        id: 9,
        name: 'Update Pattern',
        description: 'How the update pattern works in d3',
        url: 'update_pattern',
        component: dashes.UpdatePatternDashComponent,
        d3Vizzes: [
            {
                id: 1,
                name: 'D3UpdatePatternComponent',
                component: d3Vizzes.D3UpdatePatternComponent,
                dataUrl: '',
                graphWidth: 800,
                graphHeight: 600,
                margins: { top: 20, right: 20, bottom: 30, left: 40 }
            },
        ],
        vegaVizzes: []
    },
    {
        id: 10,
        name: 'Parallel Axis',
        description: 'A parallel axis chart in vega',
        url: 'parallel_axis',
        component: dashes.ParallelAxisDashComponent,
        d3Vizzes: [ ],
        vegaVizzes: [
            {
                id: 1,
                name: 'Population Pyramid',
                specUrl: 'http://localhost:4200/assets/spec/vega/parallel_axis/spec.vg.json',
                tooltipSpecUrl: 'http://localhost:4200/assets/spec/vega/parallel_axis/tooltip.json',
                containerId: 'groupedBar',
                component: d3Vizzes.D3BarChartComponent
            }
        ]
    },
    {
        id: 11,
        name: 'Spider Chart',
        description: 'A spider chart in d3',
        url: 'spider_chart',
        component: dashes.SpiderChartDashComponent,
        d3Vizzes: [
            {
                id: 7,
                name: 'D3SpiderChartComponent',
                component: d3Vizzes.D3SpiderChartComponent,
                dataUrl: '',
                graphWidth: 800,
                graphHeight: 600,
                margins: { top: 20, right: 20, bottom: 30, left: 40 }
            },
        ],
        vegaVizzes: []
    }

];
