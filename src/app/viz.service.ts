import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Viz } from './viz';
import { VIZZES } from './mock-vizzes';
import { Dash } from './dash';
import { DASHES } from './mock-dashes';

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

    // TODO change to httpclient
    getD3Data(): Promise<any> {
        const url = 'http://localhost:4200/assets/spec/d3/simple_bar/data.tsv';
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data)
            .catch((error) => {
                console.log(error)
            });
    }

}
