import { Component, OnInit } from '@angular/core';
import {TempDataService} from '../../shared/temp-data.service';
import {DataPassService} from '../../shared/datapass.service';

@Component({
  selector: 'app-polygon-list',
  templateUrl: './polygon-list.component.html',
  styleUrls: ['./polygon-list.component.scss']
})
export class PolygonListComponent implements OnInit {

  polygons = [];

  constructor(private tempData: TempDataService, private datapassservice: DataPassService) { }

  ngOnInit() {
  }

  hoverPoly(index) {
    return;
  }
}
