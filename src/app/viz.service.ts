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
            .then(heroes => heroes.find(hero => hero.id === id));
    }

    getVegaSpec(url: string) {
        return this.http.get(`./../assets/spec/vg/${url}.vg.json`)
            .map(res => res.json());
    }

}
