import { Viz } from './viz';
import {
    D3BarChartComponent,
    D3SpiderChartComponent,
    D3TutorialComponent,
    D3ThreeCirclesComponent,
    D3UpdatePatternComponent,
} from './d3';

export const VIZZES: Viz[] = [
    {
        id: 1,
        name: 'Simple Bar Chart',
        description: 'A simple bar chart in vega',
        type: 'vega',
        specUrl: 'http://localhost:4200/assets/spec/vega/simple_bar/spec.vg.json',
        tooltipSpecUrl: 'http://localhost:4200/assets/spec/vega/simple_bar/tooltip.json',
        width: 'col-md-3',
        showName: true,
        showDescription: true
    },
    {
        id: 2,
        name: 'Stacked Bar',
        description: 'A stacked bar chart in vega',
        type: 'vega',
        specUrl: 'http://localhost:4200/assets/spec/vega/stacked_bar/spec.vg.json',
        tooltipSpecUrl: 'http://localhost:4200/assets/spec/vega/stacked_bar/tooltip.json',
        width: 'col-md-3',
        showName: true,
        showDescription: true
    },
    {
        id: 3,
        name: 'Grouped Bar',
        description: 'A grouped bar chart in vega',
        type: 'vega',
        specUrl: 'http://localhost:4200/assets/spec/vega/grouped_bar/spec.vg.json',
        tooltipSpecUrl: 'http://localhost:4200/assets/spec/vega/grouped_bar/tooltip.json',
        width: 'col-md-3',
        showName: true,
        showDescription: true
    },
    {
        id: 4,
        name: 'Nested Bar',
        description: 'A nested bar chart in vega',
        type: 'vega',
        specUrl: 'http://localhost:4200/assets/spec/vega/nested_bar/spec.vg.json',
        tooltipSpecUrl: 'http://localhost:4200/assets/spec/vega/nested_bar/tooltip.json',
        width: 'col-md-2',
        showName: true,
        showDescription: true
    },
    {
        id: 5,
        name: 'Population Pyramid',
        description: 'A population pyramid chart in vega',
        type: 'vega',
        specUrl: 'http://localhost:4200/assets/spec/vega/population_pyramid/spec.vg.json',
        tooltipSpecUrl: 'http://localhost:4200/assets/spec/vega/population_pyramid/tooltip.json',
        width: 'col-md-3',
        showName: true,
        showDescription: true
    },
    {
        id: 6,
        name: 'Parallel Axis',
        description: 'A parallel axis chart in vega',
        type: 'vega',
        specUrl: 'http://localhost:4200/assets/spec/vega/parallel_axis/spec.vg.json',
        tooltipSpecUrl: 'http://localhost:4200/assets/spec/vega/parallel_axis/tooltip.json',
        width: 'col-md-3',
        showName: true,
        showDescription: true
    },
    {
        id: 7,
        name: 'Bar Chart',
        description: 'A bar chart in d3',
        type: 'd3',
        component: D3BarChartComponent,
        dataUrl: 'http://localhost:4200/assets/spec/d3/simple_bar/data.tsv',
        width: 'col-md-3',
        showName: true,
        showDescription: true
    },
    {
        id: 8,
        name: 'Spider Chart',
        description: 'A spider chart in d3',
        type: 'd3',
        component: D3SpiderChartComponent,
        dataUrl: 'http://localhost:4200/assets/spec/d3/simple_bar/data.tsv',
        width: 'col-md-3',
        showName: true,
        showDescription: true
    },
    {
        id: 9,
        name: 'Tutorial',
        description: 'For doing the d3 tutorials',
        type: 'd3',
        component: D3TutorialComponent,
        width: 'col-md-3',
        showName: true,
        showDescription: true
    },
    {
        id: 10,
        name: '3 Circles',
        description: '3 Circles tutorial',
        type: 'd3',
        component: D3ThreeCirclesComponent,
        width: 'col-md-3',
        showName: true,
        showDescription: true
    },
    {
        id: 11,
        name: 'Update Pattern',
        description: 'Update pattern tutorial',
        type: 'd3',
        component: D3UpdatePatternComponent,
        width: 'col-md-3',
        showName: true,
        showDescription: true
    },
    {
        id: 12,
        name: 'Vega Lite',
        description: 'A vega lite component',
        type: 'vega-lite',
        width: 'col-md-3',
        showName: true,
        showDescription: true
    }
];
