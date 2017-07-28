import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Viz } from './../viz';

@Injectable()
export class D3VizService {

    private http: Http;

    constructor(http: Http) {
        this.http = http;
    }

    getD3Data(url: string) {
        return this.http.get(url);
    }

}
