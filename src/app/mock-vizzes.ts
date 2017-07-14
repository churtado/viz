import { Viz } from './viz';
import {
    D3BarChartComponent,
    D3SpiderChartComponent,
    D3TutorialComponent,
    D3ThreeCirclesComponent,
    D3UpdatePatternComponent,
    D3ObjectConstancyComponent,
} from './d3';

export const VIZZES: Viz[] = [
    {
        id: 1,
        name: 'Simple Bar Chart',
        description: 'A simple bar chart in vega',
        type: 'vega',
        specUrl: 'http://localhost:4200/assets/spec/vega/simple_bar/spec.vg.json',
        tooltipSpecUrl: 'http://localhost:4200/assets/spec/vega/simple_bar/tooltip.json'
    },
    {
        id: 2,
        name: 'Stacked Bar',
        description: 'A stacked bar chart in vega',
        type: 'vega',
        specUrl: 'http://localhost:4200/assets/spec/vega/stacked_bar/spec.vg.json',
        tooltipSpecUrl: 'http://localhost:4200/assets/spec/vega/stacked_bar/tooltip.json'
    },
    {
        id: 3,
        name: 'Grouped Bar',
        description: 'A grouped bar chart in vega',
        type: 'vega',
        specUrl: 'http://localhost:4200/assets/spec/vega/grouped_bar/spec.vg.json',
        tooltipSpecUrl: 'http://localhost:4200/assets/spec/vega/grouped_bar/tooltip.json'
    },
    {
        id: 4,
        name: 'Nested Bar',
        description: 'A nested bar chart in vega',
        type: 'vega',
        specUrl: 'http://localhost:4200/assets/spec/vega/nested_bar/spec.vg.json',
        tooltipSpecUrl: 'http://localhost:4200/assets/spec/vega/nested_bar/tooltip.json'
    },
    {
        id: 5,
        name: 'Population Pyramid',
        description: 'A population pyramid chart in vega',
        type: 'vega',
        specUrl: 'http://localhost:4200/assets/spec/vega/population_pyramid/spec.vg.json',
        tooltipSpecUrl: 'http://localhost:4200/assets/spec/vega/population_pyramid/tooltip.json'
    },
    {
        id: 6,
        name: 'Parallel Axis',
        description: 'A parallel axis chart in vega',
        type: 'vega',
        specUrl: 'http://localhost:4200/assets/spec/vega/parallel_axis/spec.vg.json',
        tooltipSpecUrl: 'http://localhost:4200/assets/spec/vega/parallel_axis/tooltip.json'
    },
    {
        id: 7,
        name: 'Bar Chart',
        description: 'A bar chart in d3',
        type: 'd3',
        component: D3BarChartComponent,
        dataUrl: 'http://localhost:4200/assets/spec/d3/simple_bar/data.tsv'
    },
    {
        id: 8,
        name: 'Spider Chart',
        description: 'A spider chart in d3',
        type: 'd3',
        component: D3SpiderChartComponent,
        dataUrl: 'http://localhost:4200/assets/spec/d3/simple_bar/data.tsv'
    },
    {
        id: 9,
        name: 'Tutorial',
        description: 'For doing the d3 tutorials',
        type: 'd3',
        component: D3TutorialComponent
    },
    {
        id: 10,
        name: '3 Circles',
        description: '3 Circles tutorial',
        type: 'd3',
        component: D3ThreeCirclesComponent
    },
    {
        id: 11,
        name: 'Update Pattern',
        description: 'Update pattern tutorial',
        type: 'd3',
        component: D3UpdatePatternComponent
    },
    {
        id: 12,
        name: 'Object Constancy',
        description: `Animations can serve a purpose. Sometimes when filtering a viz
            certain objects may leave the viz and others may remain but some of
            their properties may change: color, position, etc. In this case, it may
            be more efficient to leave the element in the DOM and transition it using
            an animation rather than reloading it from source. Also, if used properly,
            the user may be able to use the movement as a preattentive attribute of
            perception to track the change.  d3 can be more efficient because of the
            saving afforded by not reloading all elements. For that, each datum must
            have a key to identify it in order to update its properties.`,
        type: 'd3',
        component: D3ObjectConstancyComponent
    }
];
