import {
    D3Viz,
    VegaViz,
    Viz,
    Dash
} from './viz';
import * as d3Vizzes from './d3';
import * as dashes from './dash';


export const VEGAVIZZES: VegaViz[] = [
    {
        id: 1,
        name: 'Simple Bar Chart',
        description: 'A simple bar chart in vega',
        type: 'vega',
        specUrl: 'http://localhost:4200/assets/spec/vega/simple_bar/spec.vg.json',
        tooltipSpecUrl: 'http://localhost:4200/assets/spec/vega/simple_bar/tooltip.json',
        containerWidth: 'col-md-3',
        showName: true,
        showDescription: true,
        dashId: 7,
        containerId: '',
        component: d3Vizzes.D3BarChartComponent
    },
    {
        id: 2,
        name: 'Stacked Bar',
        description: 'A stacked bar chart in vega',
        type: 'vega',
        specUrl: 'http://localhost:4200/assets/spec/vega/stacked_bar/spec.vg.json',
        tooltipSpecUrl: 'http://localhost:4200/assets/spec/vega/stacked_bar/tooltip.json',
        containerWidth: 'col-md-3',
        showName: true,
        showDescription: true,
        dashId: 8,
        containerId: '',
        component: d3Vizzes.D3BarChartComponent
    },
    {
        id: 3,
        name: 'Grouped Bar',
        description: 'A grouped bar chart in vega',
        type: 'vega',
        specUrl: 'http://localhost:4200/assets/spec/vega/grouped_bar/spec.vg.json',
        tooltipSpecUrl: 'http://localhost:4200/assets/spec/vega/grouped_bar/tooltip.json',
        containerWidth: 'col-md-3',
        showName: true,
        showDescription: true,
        dashId: 9,
        containerId: '',
        component: d3Vizzes.D3BarChartComponent
    },
    {
        id: 4,
        name: 'Nested Bar',
        description: 'A nested bar chart in vega',
        type: 'vega',
        specUrl: 'http://localhost:4200/assets/spec/vega/nested_bar/spec.vg.json',
        tooltipSpecUrl: 'http://localhost:4200/assets/spec/vega/nested_bar/tooltip.json',
        containerWidth: 'col-md-2',
        showName: true,
        showDescription: true,
        dashId: 10,
        containerId: '',
        component: d3Vizzes.D3BarChartComponent
    },
    {
        id: 5,
        name: 'Population Pyramid',
        description: 'A population pyramid chart in vega',
        type: 'vega',
        specUrl: 'http://localhost:4200/assets/spec/vega/population_pyramid/spec.vg.json',
        tooltipSpecUrl: 'http://localhost:4200/assets/spec/vega/population_pyramid/tooltip.json',
        containerWidth: 'col-md-3',
        showName: true,
        showDescription: true,
        dashId: 11,
        containerId: '',
        component: d3Vizzes.D3BarChartComponent
    },
    {
        id: 6,
        name: 'Parallel Axis',
        description: 'A parallel axis chart in vega',
        type: 'vega',
        specUrl: 'http://localhost:4200/assets/spec/vega/parallel_axis/spec.vg.json',
        tooltipSpecUrl: 'http://localhost:4200/assets/spec/vega/parallel_axis/tooltip.json',
        containerWidth: 'col-md-3',
        showName: true,
        showDescription: true,
        dashId: 12,
        containerId: '',
        component: d3Vizzes.D3BarChartComponent
    }
]

export const D3VIZZES: D3Viz[] = [

    {
        id: 8,
        name: 'Spider Chart',
        description: 'A spider chart in d3',
        type: 'd3',
        containerWidth: 'col-md-3',
        showName: true,
        showDescription: true,
        dashId: 2,
        containerId: '',
        component: d3Vizzes.D3SpiderChartComponent,
        dataUrl: 'http://localhost:4200/assets/spec/d3/simple_bar/data.tsv',
        graphWidth: 800,
        graphHeight: 600,
        margins: { top: 20, right: 20, bottom: 30, left: 40 }
    },
    {
        id: 9,
        name: 'Tutorial',
        description: 'For doing the d3 tutorials',
        type: 'd3',
        containerWidth: 'col-md-3',
        showName: true,
        showDescription: true,
        dashId: 3,
        containerId: '',
        component: d3Vizzes.D3TutorialComponent,
        dataUrl: '',
        graphWidth: 800,
        graphHeight: 600,
        margins: { top: 20, right: 20, bottom: 30, left: 40 }

    },
    {
        id: 10,
        name: '3 Circles',
        description: '3 Circles tutorial',
        type: 'd3',
        containerWidth: 'col-md-3',
        showName: true,
        showDescription: true,
        dashId: 4,
        containerId: '',
        component: d3Vizzes.D3ThreeCirclesComponent,
        dataUrl: '',
        graphWidth: 800,
        graphHeight: 600,
        margins: { top: 20, right: 20, bottom: 30, left: 40 }

    },
    {
        id: 11,
        name: 'Update Pattern',
        description: 'Update pattern tutorial',
        type: 'd3',
        containerWidth: 'col-md-3',
        showName: true,
        showDescription: true,
        dashId: 5,
        containerId: '',
        component: d3Vizzes.D3UpdatePatternComponent,
        dataUrl: '',
        graphWidth: 800,
        graphHeight: 600,
        margins: { top: 20, right: 20, bottom: 30, left: 40 }
    },
    {
        id: 12,
        name: 'Map',
        description: 'Map using topojson',
        type: 'd3',
        containerWidth: 'col-md-3',
        showName: true,
        showDescription: true,
        dashId: 6,
        containerId: '',
        component: d3Vizzes.D3MapComponent,
        dataUrl: '',
        graphWidth: 800,
        graphHeight: 600,
        margins: { top: 20, right: 20, bottom: 30, left: 40 }
    }
];

export const ALLVIZZES: (VegaViz | D3Viz)[] = [...VEGAVIZZES, ...D3VIZZES];

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
                description: 'A bar chart in d3',
                type: 'd3',
                containerWidth: 'col-md-3',
                showName: true,
                showDescription: true,
                dashId: 1,
                containerId: '',
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
        url: 'grouped_bar',
        component: dashes.BarchartDashComponent,
        d3Vizzes: [
            {
                id: 7,
                name: 'D3BarChart',
                description: 'A bar chart in d3',
                type: 'd3',
                containerWidth: 'col-md-3',
                showName: true,
                showDescription: true,
                dashId: 1,
                containerId: '',
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
        id: 3,
        name: 'Nested Bar',
        description: 'A nested bar chart in vega',
        url: 'nested_bar',
        component: dashes.BarchartDashComponent,
        d3Vizzes: [
            {
                id: 7,
                name: 'D3BarChart',
                description: 'A bar chart in d3',
                type: 'd3',
                containerWidth: 'col-md-3',
                showName: true,
                showDescription: true,
                dashId: 1,
                containerId: '',
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
        id: 4,
        name: 'Population Pyramid',
        description: 'A population pyramid in vega',
        url: 'population_pyramid',
        component: dashes.BarchartDashComponent,
        d3Vizzes: [
            {
                id: 7,
                name: 'D3BarChart',
                description: 'A bar chart in d3',
                type: 'd3',
                containerWidth: 'col-md-3',
                showName: true,
                showDescription: true,
                dashId: 1,
                containerId: '',
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
        id: 5,
        name: 'Stacked Bar',
        description: 'A stacked bar chart in vega',
        url: 'stacked_bar',
        component: dashes.BarchartDashComponent,
        d3Vizzes: [
            {
                id: 7,
                name: 'D3BarChart',
                description: 'A bar chart in d3',
                type: 'd3',
                containerWidth: 'col-md-3',
                showName: true,
                showDescription: true,
                dashId: 1,
                containerId: '',
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
        id: 6,
        name: 'Map',
        description: 'A map in d3 using topojson',
        url: 'map',
        component: dashes.BarchartDashComponent,
        d3Vizzes: [
            {
                id: 7,
                name: 'D3BarChart',
                description: 'A bar chart in d3',
                type: 'd3',
                containerWidth: 'col-md-3',
                showName: true,
                showDescription: true,
                dashId: 1,
                containerId: '',
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
        id: 7,
        name: '3 circles',
        description: '3 circles in d3',
        url: 'three_circles',
        component: dashes.BarchartDashComponent,
        d3Vizzes: [
            {
                id: 7,
                name: 'D3BarChart',
                description: 'A bar chart in d3',
                type: 'd3',
                containerWidth: 'col-md-3',
                showName: true,
                showDescription: true,
                dashId: 1,
                containerId: '',
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
        id: 8,
        name: 'Tutorial',
        description: 'A tutorial in d3',
        url: 'tutorial',
        component: dashes.BarchartDashComponent,
        d3Vizzes: [
            {
                id: 7,
                name: 'D3BarChart',
                description: 'A bar chart in d3',
                type: 'd3',
                containerWidth: 'col-md-3',
                showName: true,
                showDescription: true,
                dashId: 1,
                containerId: '',
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
        id: 9,
        name: 'Update Pattern',
        description: 'How the update pattern works in d3',
        url: 'update_pattern',
        component: dashes.BarchartDashComponent,
        d3Vizzes: [
            {
                id: 7,
                name: 'D3BarChart',
                description: 'A bar chart in d3',
                type: 'd3',
                containerWidth: 'col-md-3',
                showName: true,
                showDescription: true,
                dashId: 1,
                containerId: '',
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
        id: 10,
        name: 'Parallel Axis',
        description: 'Parallel Axis in vega',
        url: 'parallel_axis',
        component: dashes.BarchartDashComponent,
        d3Vizzes: [
            {
                id: 7,
                name: 'D3BarChart',
                description: 'A bar chart in d3',
                type: 'd3',
                containerWidth: 'col-md-3',
                showName: true,
                showDescription: true,
                dashId: 1,
                containerId: '',
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
        id: 11,
        name: 'Spider Chart',
        description: 'A spider chart in d3',
        url: 'spider_chart',
        component: dashes.BarchartDashComponent,
        d3Vizzes: [
            {
                id: 7,
                name: 'D3BarChart',
                description: 'A bar chart in d3',
                type: 'd3',
                containerWidth: 'col-md-3',
                showName: true,
                showDescription: true,
                dashId: 1,
                containerId: '',
                component: d3Vizzes.D3BarChartComponent,
                dataUrl: 'http://localhost:4200/assets/spec/d3/simple_bar/data.tsv',
                graphWidth: 800,
                graphHeight: 600,
                margins: { top: 20, right: 20, bottom: 30, left: 40 }
            },
        ],
        vegaVizzes: []
    }

];
