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
        return this.http.get(viz.specUrl)
            .map(res => res.json());
    }

    getVegaTooltipSpec(viz: Viz) {
        return this.http.get(viz.tooltipSpecUrl)
            .map(res => res.json());
    }

    getD3Component(viz: Viz) {
    }

}
