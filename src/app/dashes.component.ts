import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Dash } from './dash';
import { VizService } from './viz.service';
@Component({
  selector: 'app-dashes',
  templateUrl: './dashes.component.html',
  styleUrls: ['./dashes.component.css'],
})

export class DashesComponent implements OnInit {
  dashes: Dash[];
  selectedDash: Dash;

  constructor(
    private router: Router,
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

  gotoDetail(dash: Dash) {
    this.router.navigate(['/dash', this.selectedDash.id]);
  }
}
