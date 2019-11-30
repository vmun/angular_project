import { Component, OnInit } from '@angular/core';
import {TempDataService} from '../../shared/services/temp-data.service';
import {DataPassService} from '../../shared/services/datapass.service';
import {Image} from '../../shared/models/models';
import {ProviderService} from "../../shared/services/provider.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {

  images: Image[];
  current = 0;

  constructor(private tempData: TempDataService,
              private datapassservice: DataPassService,
              private provider: ProviderService,
              private route: ActivatedRoute) {
    this.provider.getImages(+this.route.snapshot.paramMap.get('id')).then(res => {
      this.images = res;
    });
  }

  ngOnInit() {
  }

  changeImage(index) {
    this.current = index;
    this.datapassservice.image.next(this.images[index]);
  }

}
