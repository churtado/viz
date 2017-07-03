import { Component, OnInit } from '@angular/core';

import { Viz } from './viz';
import { VizService } from './viz.service';

@Component({
    selector: 'viz-container',
    templateUrl: './viz-container.component.html',
})
export class VizContainerComponent implements OnInit {
    vizzes: Viz[] = [];

    constructor(private vizService: VizService) { }

    ngOnInit(): void {
        this.vizService.getVizzes()
            .then(vizzes => this.vizzes = vizzes.slice(0, 3));
    }
}