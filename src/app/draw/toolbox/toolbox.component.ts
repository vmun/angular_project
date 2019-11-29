import { Component, OnInit } from '@angular/core';
import {DataPassService} from '../../shared/datapass.service';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent implements OnInit {

  set opacityValue(value) {
    this.datapassservice.opacity.next(value);
  }

  set brightnessValue(value) {
    this.datapassservice.opacity.next(value);
  }

  set contrastValue(value) {
    this.datapassservice.opacity.next(value);
  }

  constructor(private datapassservice: DataPassService) { }

  ngOnInit() {
  }

}
