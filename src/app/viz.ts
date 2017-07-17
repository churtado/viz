import { Type } from '@angular/core';

export class Viz {
  id: number;
  name: string;
  description: string;
  type: string;
  width: string;
  showName: boolean;
  showDescription: boolean;
  tags?: string[];
  specUrl?: string;
  tooltipSpecUrl?: string;
  component?: Type<any>;
  dataUrl?: string;
}
