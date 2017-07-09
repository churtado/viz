import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appD3Component]',
})
export class D3Directive {
    constructor(public viewContainerRef: ViewContainerRef) { }
}
