import { Type } from '@angular/core';

export class Viz {
  id: number;
  name: string;
  description: string;
  type: string;
  specUrl?: string;
  tooltipSpecUrl?: string;
  component?: Type<any>;
  dataUrl?: string;
}
