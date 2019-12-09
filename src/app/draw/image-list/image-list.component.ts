import { Component, OnInit } from '@angular/core';
import {TempDataService} from '../../shared/services/temp-data.service';
import {DataPassService} from '../../shared/services/datapass.service';
import {Image} from '../../shared/models/models';
import {ProviderService} from '../../shared/services/provider.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {

  images: Image[];
  current = 0;

  data: Image[] = [];

  constructor(private tempData: TempDataService,
              private datapassservice: DataPassService,
              private provider: ProviderService,
              private route: ActivatedRoute) {

    this.data = this.route.snapshot.data.pageData;
    if (this.data.length > 0) {
      for (const im of this.data) {
        if (im.file[0] === '/') {
          im.file = provider.host.slice(0, -1) + im.file;
        }
      }
      this.images = this.data;
      this.changeImage(0);
    }

    // this.provider.getImages(+this.route.snapshot.paramMap.get('id')).then(res => {
    //   if (res.length > 0) {
    //     for (const im of res) {
    //       if (im.file[0] === '/') {
    //         im.file = provider.host.slice(0, -1) + im.file;
    //       }
    //     }
    //     this.images = res;
    //     this.changeImage(0);
    //   }
    // });
  }

  ngOnInit() {
  }

  changeImage(index) {
    this.current = index;
    this.datapassservice.image.next(this.images[index]);
  }

}
