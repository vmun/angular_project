import { Component, OnInit } from '@angular/core';
import {TempDataService} from '../../shared/services/temp-data.service';
import {DataPassService} from '../../shared/services/datapass.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {

  images = this.tempData.images;
  current = 0;

  constructor(private tempData: TempDataService, private datapassservice: DataPassService) { }

  ngOnInit() {
  }

  changeImage(index) {
    this.current = index;
    this.datapassservice.image.next(index);
  }

}
