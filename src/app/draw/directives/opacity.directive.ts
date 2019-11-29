import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appOpacity]'
})
export class OpacityDirective {

  _opacityValue;
  get opacityValue() {
    return this._opacityValue;
  }

  @Input('opacityValue')
  set opacityValue(value) {
    this._opacityValue = value;
    this.updateOpacity();
  }


  constructor(private element: ElementRef) {
    element.nativeElement.style.opacity = this.opacityValue;
  }

  updateOpacity() {
    this.element.nativeElement.style.opacity = this.opacityValue;
  }
}
