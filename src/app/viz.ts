import { Type } from '@angular/core';

export class Viz {
  id: number;
  name: string;
  description: string;
  type: string;
  specUrl?: string;
  component?: Type<any>;
}
