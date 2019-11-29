import { Component, OnInit } from '@angular/core';
import {TempDataService} from '../../shared/temp-data.service';
import {DataPassService} from '../../shared/datapass.service';

@Component({
  selector: 'app-polygon-list',
  templateUrl: './polygon-list.component.html',
  styleUrls: ['./polygon-list.component.scss']
})
export class PolygonListComponent implements OnInit {

  currentImage = 0;
  polygons = this.datapassservice.polygons.filter(pol => pol.image === this.currentImage);

  constructor(private tempData: TempDataService, private datapassservice: DataPassService) {
    this.datapassservice.currentImage$.subscribe((data) => {
      this.currentImage = data;
      this.polygons = this.datapassservice.polygons.filter(pol => pol.image === this.currentImage);
    });
    this.datapassservice.sendedPolygon$.subscribe((data) => {
      this.polygons.push(data);
    });
  }

  ngOnInit() {
  }

  hoverPoly(index) {
    return;
  }
}
