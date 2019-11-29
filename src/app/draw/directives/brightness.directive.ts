import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appBrightness]'
})
export class BrightnessDirective {

  _brightnessValue;
  get brightnessValue() {
    return this._brightnessValue;
  }

  @Input('opacityValue')
  set brightnessValue(value) {
    this._brightnessValue = value;
    this.updateOpacity();
  }


  constructor(private element: ElementRef) {
    element.nativeElement.style.filter = 'brightness(' + this.brightnessValue + ')';
  }

  updateOpacity() {
    this.element.nativeElement.style.filter = 'brightness(' + this.brightnessValue + ')';
  }

}
