import {Component, OnInit, Input} from '@angular/core';
import { Dash } from '../dash';

@Component({
    selector: 'app-dash',
    templateUrl: './dash.component.html',
    styleUrls: ['./dash.component.css'],
})
export class DashComponent implements OnInit {
    @Input() dash: Dash;

    constructor(
    ) { }

    ngOnInit(): void {
    }

}
