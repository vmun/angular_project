import { Component, OnInit } from '@angular/core';
import {DataPassService} from '../../shared/services/datapass.service';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent implements OnInit {

  _opacityValue = 0.5;
  get opacityValue() {
    return this._opacityValue;
  }

  set opacityValue(value) {
    this._opacityValue = value;
    this.datapassservice.opacity.next(value);
  }


  _brightnessValue = 1;
  get brightnessValue() {
    return this._brightnessValue;
  }

  set brightnessValue(value) {
    this._brightnessValue = value;
    this.datapassservice.brightness.next(['brightness', value]);
  }


  _contrastValue = 1;
  get contrastValue() {
    return this._contrastValue;
  }

  set contrastValue(value) {
    this._contrastValue = value;
    this.datapassservice.brightness.next(['contrast', value]);
  }

  constructor(private datapassservice: DataPassService) { }

  ngOnInit() {
  }

}
