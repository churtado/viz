import { Injectable } from '@angular/core';

import { BAR } from './specs.mock';

@Injectable()
export class SpecService{
    getSpec(): any {
        return BAR;
    }
}