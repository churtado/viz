import {
    Component, OnInit, AfterViewInit,
    Input, ViewChild, ElementRef,
    ComponentFactoryResolver,
    OnDestroy, ViewContainerRef
} from '@angular/core';
import { DashService } from './../dash.service';

import { Dash, D3Viz, Viz } from './../../viz';

import {
    D3ThreeCirclesComponent,
} from './../../d3';

@Component({
    selector: 'app-dash',
    templateUrl: './three-circles-dash.component.html',
    styleUrls: ['./three-circles-dash.component.css'],
    entryComponents: [
        D3ThreeCirclesComponent,
    ]
})
export class ThreeCirclesDashComponent implements OnInit {

    /**
     * Here we define where our vizzes will go
     */
    @ViewChild('D3ThreeCirclesComponent', { read: ViewContainerRef }) threeCirclesComponentContainer: ViewContainerRef;

    private dash: Dash;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private viewContainerRef: ViewContainerRef,
        private dashService: DashService,
    ) { }

    ngOnInit(): void {

        /**
         * building the list of child containers
         */
        const containers = [
            {
                name: 'D3ThreeCirclesComponent',
                container: this.threeCirclesComponentContainer
            }
        ];

        // get the vizzes used for the dashboard
        this.dashService.getDash(7).then((dash) => {
            this.dash = dash;

            this.dash.d3Vizzes.forEach((viz: D3Viz) => {
                this.insertViz(viz, containers);
            })
        });

    }

    private insertViz(
        viz: D3Viz,
        containers: { name: string, container: ViewContainerRef }[]) {
        const ref = this.viewContainerRef.createComponent(
            this.componentFactoryResolver.resolveComponentFactory(viz.component));

        ref.instance.viz = viz;
        containers.find((e) => e.name === viz.name).container.insert(ref.hostView);
    }

}
