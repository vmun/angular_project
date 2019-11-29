import {EventEmitter, Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import { TempDataService } from './temp-data.service';
import {MainService} from './main.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataPassService extends MainService {

  constructor(private tempData: TempDataService, http: HttpClient) {
    super(http);
    this.currentUser$ = this.user.asObservable();
    this.currentImage$ = this.image.asObservable();
    this.currentCategory$ = this.category.asObservable();
    this.sendedPolygon$ = this.polygon.asObservable();
    this.currentOpacity$ = this.opacity.asObservable();
    this.currentBrightness$ = this.brightness.asObservable();
  }
  user = new BehaviorSubject('anonymous');
  currentUser$: Observable<string>;

  category = new BehaviorSubject(0);
  currentCategory$: Observable<any>;

  image = new BehaviorSubject(0);
  currentImage$: Observable<any>;

  polygon = new Subject();
  sendedPolygon$: Observable<any>;

  opacity = new Subject();
  currentOpacity$: Observable<any>;

  brightness = new Subject();
  currentBrightness$: Observable<any>;

  polygons = this.tempData.polygons;

  auth(username: any, password: any): Promise<any> {
    return this.post('http://localhost:8000/login/', {
      username: username,
      password: password
    });
  }

  register(username: any, password1: any, email: any): Promise<any> {
    return this.post('http://localhost:8000/register/', {
      username: username,
      email: email,
      password: password1
    });
  }
}
