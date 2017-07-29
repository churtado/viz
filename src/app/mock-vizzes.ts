import {
    D3Viz,
    VegaViz,
    Viz,
    Dash
} from './viz';
import {
    D3BarChartComponent,
    D3SpiderChartComponent,
    D3TutorialComponent,
    D3ThreeCirclesComponent,
    D3UpdatePatternComponent,
    D3MapComponent
} from './d3';

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
        component: D3BarChartComponent
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
        component: D3BarChartComponent
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
        component: D3BarChartComponent
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
        component: D3BarChartComponent
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
        component: D3BarChartComponent
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
        component: D3BarChartComponent
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
        component: D3SpiderChartComponent,
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
        component: D3TutorialComponent,
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
        component: D3ThreeCirclesComponent,
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
        component: D3UpdatePatternComponent,
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
        component: D3MapComponent,
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
        name: 'Test Dashboard',
        description: 'A bar chart in d3',
        url: '/testdash',
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
                component: D3BarChartComponent,
                dataUrl: 'http://localhost:4200/assets/spec/d3/simple_bar/data.tsv',
                graphWidth: 800,
                graphHeight: 600,
                margins: { top: 20, right: 20, bottom: 30, left: 40 }
            },
        ],
        vegaVizzes: []
    }
];
