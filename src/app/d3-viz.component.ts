import 'rxjs/add/operator/switchMap';
import {
    Component, OnInit,
    ComponentFactoryResolver,
    ViewContainerRef,
    Input,
    OnDestroy, ViewChild
} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { VizService } from './viz.service';
import { Viz } from './viz';

import {
    D3BarChartComponent
} from './d3'; // './d3/bar_chart/bar-chart.component';

@Component({
    selector: 'app-d3-viz',
    templateUrl: './d3-viz.component.html',
    entryComponents: [D3BarChartComponent]
})
export class D3VizComponent implements OnInit {
    @ViewChild('d3ComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer: ViewContainerRef;

    @Input() viz: Viz

    constructor(
        private vizService: VizService,
        private route: ActivatedRoute,
        private componentFactoryResolver: ComponentFactoryResolver,
        private viewContainerRef: ViewContainerRef,
        private location: Location
    ) { }


    ngOnInit(): void {
        // get the viz id from the url parameter passed in
        this.route.paramMap
            // get the viz object observable
            .switchMap((params: ParamMap) => this.vizService.getViz(+params.get('id')))
            // subscribe to get the viz value
            .subscribe((viz: Viz) => {
                this.viz = viz;
                // load the component specified in the viz
                const factory = this.componentFactoryResolver.resolveComponentFactory(this.viz.component);
                const ref = this.viewContainerRef.createComponent(factory);
                this.dynamicComponentContainer.insert(ref.hostView);
            });
    }

    goBack(): void {
        this.location.back();
    }
}
