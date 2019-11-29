import { Component, OnInit } from '@angular/core';
import {TempDataService} from '../../shared/temp-data.service';
import {DataPassService} from '../../shared/datapass.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {

  imageElement;
  currentImage = 0;

  constructor(private tempData: TempDataService, private datapassservice: DataPassService) {
    this.datapassservice.currentImage$.subscribe((data) => {
      if (this.imageElement) {
        this.currentImage = data;
        console.log(this.currentImage);
        this.changeImage(data);
      }
    });
  }

  ngOnInit() {
    this.imageElement = document.getElementById('image');
    this.changeImage(0);
  }

  changeImage(index) {
    this.imageElement.setAttribute( 'src', this.tempData.imagesFull.find(im => im.id === index).url);
  }

}
