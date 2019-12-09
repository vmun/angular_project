import {Component, Input, OnInit} from '@angular/core';
import {TempDataService} from '../../shared/services/temp-data.service';
import {DataPassService} from '../../shared/services/datapass.service';
import {Label, Polygon} from '../../shared/models/models';
import {Image} from '../../shared/models/models';
import {ProviderService} from "../../shared/services/provider.service";

@Component({
  selector: 'app-polygon-list',
  templateUrl: './polygon-list.component.html',
  styleUrls: ['./polygon-list.component.scss']
})
export class PolygonListComponent implements OnInit {

  @Input() labels: Label[];

  currentImage: Image;
  polygons: Polygon[];

  constructor(private tempData: TempDataService, private datapassservice: DataPassService, private provider: ProviderService) {
    this.datapassservice.allPolygons$.subscribe((data) => {
      this.polygons = data;
    });
    this.datapassservice.currentImage$.subscribe((data) => {
      this.currentImage = data;
    });
    this.datapassservice.sendedPolygon$.subscribe((data) => {
      this.polygons.push(data);
    });
  }

  ngOnInit() {
  }

  labelName(id) {
    return this.labels.find(lb => lb.id = id).name;
  }

  deletePolygon(id) {
    this.provider.deletePolygon(id).then(res => {
      console.log('deleted');
    });
  }


  hoverPoly(index) {
    return;
  }
}
