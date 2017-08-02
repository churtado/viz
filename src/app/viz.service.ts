import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

import { Viz, VegaViz, Dash } from './viz';
import { DASHES } from './mock-vizzes';

@Injectable()
export class VizService {

    constructor(private http: Http) { }

    getDashes(): Promise<Dash[]> {
        return Promise.resolve(DASHES);
    }

    getDash(id: number): Promise<Dash> {
        return this.getDashes()
            .then(dashes => dashes.find(dash => dash.id === id));
    }

    getSpec(viz: VegaViz) {
        return this.http.get(viz.specUrl)
            .map(res => res.json());
    }

    getVegaTooltipSpec(viz: VegaViz) {
        return this.http.get(viz.tooltipSpecUrl)
            .map(res => res.json());
    }

}
