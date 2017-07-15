import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { VizService } from './viz.service';

import { Dash } from './dash';

@Component({
    selector: 'app-dash',
    templateUrl: './dash.component.html',
    styleUrls: ['./dash.component.css'],
})
export class DashComponent implements OnInit {
    @Input() dash: Dash;

    constructor(
        private vizService: VizService,
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.route.paramMap
        .switchMap((params: ParamMap) => this.vizService.getDash(+params.get('id')))
        .subscribe((dash: Dash) => {
            this.dash = dash;
        });
    }

}
