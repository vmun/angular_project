import { Component, OnInit } from '@angular/core';
import {TempDataService} from '../../shared/services/temp-data.service';
import {DataPassService} from '../../shared/services/datapass.service';
import {Polygon} from "../../shared/models/models";
import {Image} from "../../shared/models/models";

@Component({
  selector: 'app-polygon-list',
  templateUrl: './polygon-list.component.html',
  styleUrls: ['./polygon-list.component.scss']
})
export class PolygonListComponent implements OnInit {

  currentImage: Image;
  polygons: Polygon[];

  constructor(private tempData: TempDataService, private datapassservice: DataPassService) {
    this.datapassservice.currentImage$.subscribe((data) => {
      this.currentImage = data;
      this.polygons = this.datapassservice.polygons.filter(pol => pol.image === this.currentImage.id);
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
