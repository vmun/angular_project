import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appBrightness]'
})
export class BrightnessDirective {

  // _brightnessValue;
  // get brightnessValue() {
  //   return this._brightnessValue;
  // }

  @Input('brightnessValue')
  set brightnessValue(value) {
    switch (value[0]) {
      case 'brightness':
        this.brightness = value[1];
        break;
      case 'contrast':
        this.contrast = value[1];
    }
    this.updateBrightness();
  }

  brightness = 1;
  contrast = 1;

  constructor(private element: ElementRef) {
    // element.nativeElement.style.filter = 'brightness(' + this.brightnessValue[1] + ')';
    // element.nativeElement.style.filter = 'contrast(' + this.brightnessValue[1] + ')';
  }

  updateBrightness() {
    this.element.nativeElement.style.filter = 'brightness(' + this.brightness + ') contrast(' + this.contrast + ')';
  }

}
