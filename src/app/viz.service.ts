import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map'

import { Viz } from './viz';
import { VIZZES } from './mock-vizzes';

@Injectable()
export class VizService {

    constructor(private http: Http) { }

    getVizzes(): Promise<Viz[]> {
        return Promise.resolve(VIZZES);
    }

    getViz(id: number): Promise<Viz> {
        return this.getVizzes()
            .then(vizzes => vizzes.find(viz => viz.id === id));
    }

    getSpec(viz: Viz) {
        return this.http.get(`./../assets/spec/${viz.type}/${viz.specUrl}/spec.vg.json`)
            .map(res => res.json());
    }

    getVegaTooltipSpec(viz: Viz) {
        return this.http.get(`./../assets/spec/vega/${viz.specUrl}/tooltip.json`)
            .map(res => res.json());
    }

}
