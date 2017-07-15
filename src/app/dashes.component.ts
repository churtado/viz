import {
    Component, OnInit,
    ComponentFactoryResolver,
    ViewContainerRef,
    Input,
    OnDestroy, ViewChild
} from '@angular/core';

import { VizService } from './viz.service';
import { Dash } from './dash'

import {
  DashComponent
} from './dash/index';
@Component({
  selector: 'app-dashes',
  templateUrl: './dashes.component.html',
  styleUrls: ['./dashes.component.css'],
  entryComponents: [
    DashComponent
  ]
})

export class DashesComponent implements OnInit {
  dashes: Dash[];
  selectedDash: Dash;

  constructor(
    private vizService: VizService) { }

  ngOnInit(): void {
    this.getDashes();
  }

  onSelect(dash: Dash): void {
    this.selectedDash = dash;
  }

  getDashes(): void {
    this.vizService.getDashes().then(dashes => this.dashes = dashes);
  }

}
