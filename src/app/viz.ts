import { Type } from '@angular/core';


export class Viz {
  id: number;
  name: string;
  description: string;
  type: string;
  containerWidth: string;
  showName: boolean;
  showDescription: boolean;
  dashId: number;
  containerId: string;
  component: Type<any>;
}

export class VegaViz extends Viz {
  specUrl: string;
  tooltipSpecUrl: string;
}

export class D3Viz extends Viz {
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
}
