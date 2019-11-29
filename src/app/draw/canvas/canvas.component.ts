import { Component, OnInit } from '@angular/core';
import {TempDataService} from '../../shared/temp-data.service';
import {DataPassService} from '../../shared/datapass.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {

  currentImage = 0;
  opacity = 0.5;
  brightness = 1;

  imageElement: HTMLImageElement;
  canvasElement: HTMLCanvasElement;
  canvasCtx;

  pointsBuffer = [];
  polygonsBuffer = this.datapassservice.polygons.filter(pol => pol.image === this.currentImage);

  constructor(private tempData: TempDataService, private datapassservice: DataPassService) {
    this.datapassservice.currentImage$.subscribe((data) => {
      if (this.imageElement) {
        this.currentImage = data;
        this.changeImage(data);
      }
    });
    this.datapassservice.currentOpacity$.subscribe((data) => {
      this.opacity = data;
    });
    this.datapassservice.currentBrightness$.subscribe((data) => {
      this.brightness = data;
    });
  }

  ngOnInit() {
    this.imageElement = document.getElementById('image') as HTMLImageElement;
    this.canvasElement = document.getElementById('canvas') as HTMLCanvasElement;
    this.canvasCtx = this.canvasElement.getContext('2d');
    this.changeImage(0);
    this.imageElement.onload = () => {
      this.canvasElement.style.top = this.imageElement.clientTop.toString();
      this.canvasElement.style.left = this.imageElement.clientLeft.toString();
      this.canvasElement.height = this.imageElement.clientHeight;
      this.canvasElement.width = this.imageElement.clientWidth;
      this.canvasCtx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
      this.drawPolygons();
    };
  }

  changeImage(index) {
    this.imageElement.setAttribute( 'src', this.tempData.imagesFull.find(im => im.id === index).url);
    this.polygonsBuffer = this.datapassservice.polygons.filter(pol => pol.image === this.currentImage);
    this.pointsBuffer = [];
  }



  canvasClick(event) {
    const point = {x: event.offsetX, y: event.offsetY};
    this.drawPoint(point, 'rgba(255, 0, 0, 1)');

    if (this.pointsBuffer.length > 0) {
      this.drawLine(point, 'rgba(255, 0, 0, 1)');
    }

    if ((this.pointsBuffer.length >= 3) && this.isNear(point, this.pointsBuffer[0])) {
      this.polygonsBuffer.push({id: -1, name: 'poly', image: this.currentImage, points: this.pointsBuffer});
      this.datapassservice.polygons.push({id: -1, name: 'poly', image: this.currentImage, points: this.pointsBuffer});
      this.datapassservice.polygon.next({id: -1, name: 'poly', image: this.currentImage, points: this.pointsBuffer});
      this.drawPolygons();
      this.pointsBuffer = [];
    } else {
      this.pointsBuffer.push(point);
    }
  }

  drawPoint(point, color) {
    this.canvasCtx.beginPath();
    this.canvasCtx.arc(point.x, point.y, 6, 0, 2 * Math.PI);
    this.canvasCtx.fillStyle = color;
    this.canvasCtx.fill();
    this.canvasCtx.lineWidth = 1;
    this.canvasCtx.strokeStyle = 'black';
    this.canvasCtx.stroke();
  }

  drawLine(point, color) {
    const prevPoint = this.pointsBuffer[this.pointsBuffer.length - 1];
    this.canvasCtx.beginPath();
    this.canvasCtx.moveTo(prevPoint.x, prevPoint.y);
    this.canvasCtx.lineTo(point.x, point.y);
    this.canvasCtx.lineWidth = 4;
    this.canvasCtx.strokeStyle = color;
    this.canvasCtx.stroke();
  }

  drawPolygons() {
    this.canvasCtx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    this.canvasCtx.fillStyle = 'rgba(255, 0, 0, 1)';
    this.canvasCtx.beginPath();
    this.polygonsBuffer.forEach((poly) => {
      poly.points.forEach((point, index) => {
        if (index === 0) {
          this.canvasCtx.moveTo(point.x, point.y);
        } else {
          this.canvasCtx.lineTo(poly.points[index].x, poly.points[index].y);
        }
      });
    });
    this.canvasCtx.closePath();
    this.canvasCtx.fill();
  }

  isNear(point1, point2) {
    return (point1.x >= point2.x - 5 && point1.x <= point2.x + 5)
      && (point1.y >= point2.y - 5 && point1.y <= point2.y + 5);
  }
}
