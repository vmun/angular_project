import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[gacha-host]',
})
export class GachaDirective {
  constructor(public viewContainerRef: ViewContainerRef) {
  }
}
