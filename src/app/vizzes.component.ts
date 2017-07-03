import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Viz } from './viz';
import { VizService } from './viz.service';
@Component({
  selector: 'vizzes',
  templateUrl: './vizzes.component.html',
  styleUrls: ['./vizzes.component.css'],
})

export class VizzesComponent implements OnInit {
  vizzes: Viz[];
  selectedViz: Viz;

  constructor(
    private router: Router,
    private vizService: VizService) { }

  ngOnInit(): void {
    this.getVizzes();
  }

  onSelect(viz: Viz): void {
    this.selectedViz = viz;
  }

  getVizzes(): void {
    this.vizService.getVizzes().then(vizzes => this.vizzes = vizzes);
  }

  gotoDetail() {
    this.router.navigate(['/viz', this.selectedViz.id]);
  }
}