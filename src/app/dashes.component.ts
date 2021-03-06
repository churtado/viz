import {
  Component, OnInit,
  ComponentFactoryResolver,
  ViewContainerRef,
  Input,
  OnDestroy, ViewChild
} from '@angular/core';
import { Router } from '@angular/router';

import { VizService } from './viz.service';
import { Dash } from './viz'

import * as dashes from './dash/index';
@Component({
  selector: 'app-dashes',
  templateUrl: './dashes.component.html',
  styleUrls: ['./dashes.component.css'],
  entryComponents: [
    dashes.TestDashComponent
  ]
})

export class DashesComponent implements OnInit {
  dashes: Dash[];

  constructor(
    private router: Router,
    private vizService: VizService) { }

  ngOnInit(): void {
    this.getDashes();
  }

  onSelect(dash: Dash): void {
    this.router.navigate([dash.url]);
  }

  getDashes(): void {
    this.vizService.getDashes().then(dashes => this.dashes = dashes);
  }
}
