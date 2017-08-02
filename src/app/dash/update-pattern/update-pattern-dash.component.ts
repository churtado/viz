import {
    Component, OnInit, AfterViewInit,
    Input, ViewChild, ElementRef,
    ComponentFactoryResolver,
    OnDestroy, ViewContainerRef
} from '@angular/core';
import { DashService } from './../dash.service';

import { Dash, D3Viz, Viz } from './../../viz';

import {
    D3UpdatePatternComponent,
} from './../../d3';

@Component({
    selector: 'app-dash',
    templateUrl: './update-pattern-dash.component.html',
    styleUrls: ['./update-pattern-dash.component.css'],
    entryComponents: [
        D3UpdatePatternComponent,
    ]
})
export class UpdatePatternDashComponent implements OnInit {

    /**
     * Here we define where our vizzes will go
     */
    @ViewChild('D3UpdatePatternComponent', { read: ViewContainerRef }) updatePatternComponentContainer: ViewContainerRef;

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
                name: 'D3UpdatePatternComponent',
                container: this.updatePatternComponentContainer
            }
        ];

        // get the vizzes used for the dashboard
        this.dashService.getDash(9).then((dash) => {
            this.dash = dash;

            this.dash.d3Vizzes.forEach((viz: D3Viz) => {
                this.insertViz(viz, containers);
            })
        });

    }

    private insertViz(
        viz: Viz,
        containers: { name: string, container: ViewContainerRef }[]) {
        const ref = this.viewContainerRef.createComponent(
            this.componentFactoryResolver.resolveComponentFactory(viz.component));

        ref.instance.viz = viz;
        containers.find((e) => e.name === viz.name).container.insert(ref.hostView);
    }

}
