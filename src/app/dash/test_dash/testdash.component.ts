import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-dash',
    templateUrl: './testdash.component.html',
    styleUrls: ['./testdash.component.css'],
})
export class TestDashComponent implements OnInit {

    constructor(
    ) { }

    ngOnInit(): void {
        console.log('hi')
    }

}
