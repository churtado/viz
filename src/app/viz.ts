import { Type } from '@angular/core';


export class VizI {
  id: number;
  name: string;
  description: string;
  type: string;
  containerWidth: string;
  showName: boolean;
  showDescription: boolean;
}

export class Viz {
  id: number;
  name: string;
  description: string;
  type: string;
  containerWidth: string;
  showName: boolean;
  showDescription: boolean;
  tags?: string[];
  specUrl?: string;
  tooltipSpecUrl?: string;
  component?: Type<any>;
  dataUrl?: string;
  graphWidth?: number;
  graphHeight?: number;
  margins?: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  }
}

export class VegaViz extends VizI {
  specUrl: string;
  tooltipSpecUrl: string;
}

export class D3Viz extends VizI {
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
