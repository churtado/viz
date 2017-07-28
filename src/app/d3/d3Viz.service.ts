import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Viz } from './../viz';

@Injectable()
export class D3VizService {

    private http: Http;

    constructor(http: Http) {
        this.http = http;
    }

    getD3Data() {
        const url = 'http://localhost:4200/assets/spec/d3/simple_bar/data.tsv';
        return this.http.get(url);
            /**
             * could come in handy later
             * if I include mapping steps
             */
            // .map(res => res.json);
    }

}
