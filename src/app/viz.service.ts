import { Injectable } from '@angular/core';

import { Viz } from './viz';
import { VIZZES } from './mock-vizzes';

@Injectable()
export class VizService {

    getVizzes(): Promise<Viz[]> {
        return Promise.resolve(VIZZES);
    }

    getViz(id: number): Promise<Viz> {
        return this.getVizzes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }

}
