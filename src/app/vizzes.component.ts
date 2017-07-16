import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Viz } from './viz';
import { VizService } from './viz.service';
@Component({
  selector: 'app-vizzes',
  templateUrl: './vizzes.component.html',
  styleUrls: ['./vizzes.component.css'],
})

export class VizzesComponent implements OnInit {
  vizzes: Viz[];

  constructor(
    private router: Router,
    private vizService: VizService) { }

  ngOnInit(): void {
    this.getVizzes();
  }

  onSelect(viz: Viz): void {
    switch (viz.type) {
      case 'vega':
        this.router.navigate(['/vega', viz.id]);
        break;
      case 'd3':
        this.router.navigate(['/d3', viz.id]);
        break;
    }
  }

  getVizzes(): void {
    this.vizService.getVizzes().then(vizzes => this.vizzes = vizzes);
  }

}
