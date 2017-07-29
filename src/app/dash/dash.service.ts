import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

import { Viz, D3Viz, VegaViz, Dash } from './../viz';
import { DASHES } from './../mock-vizzes';

@Injectable()
export class DashService {

    constructor(private http: Http) { }

    getDashes(): Promise<Dash[]> {
        return Promise.resolve(DASHES);
    }

    /**
     * @param id the dashboard id
     */
    getDash(id: number): Promise<Dash> {
        return this.getDashes()
            .then(dashes => dashes.find(dash => dash.id === id));
    }

}
