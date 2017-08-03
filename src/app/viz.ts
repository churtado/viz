import { Type } from '@angular/core';


export class Viz {
  id: number;
  name: string;
}

export class VegaViz extends Viz {
  specUrl: string;
  tooltipSpecUrl: string;
  containerId: string;
}

export class D3Viz extends Viz {
  component: Type<any>;
  dataUrl: string;
  graphWidth: number;
  graphHeight: number;
  margins: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  }
}

export class Dash {
  id: number;
  name: string;
  description: string;
  url: string;
  d3Vizzes: D3Viz[];
  vegaVizzes: VegaViz[];
  component: Type<any>;
}
