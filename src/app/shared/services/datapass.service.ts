import {EventEmitter, Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {TempDataService} from './temp-data.service';
import {MainService} from './main.service';
import {HttpClient} from '@angular/common/http';
import {AuthResponse, Folder, Image, Label, Polygon} from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class DataPassService extends MainService {

  constructor(private tempData: TempDataService, http: HttpClient) {
    super(http);
    this.currentUser$ = this.user.asObservable();
    this.currentImage$ = this.image.asObservable();
    this.currentCategory$ = this.category.asObservable();
    this.currentRoute$ = this.route.asObservable();
    this.sendedPolygon$ = this.polygon.asObservable();
    this.currentOpacity$ = this.opacity.asObservable();
    this.currentBrightness$ = this.brightness.asObservable();
  }

  user = new BehaviorSubject('anonymous');
  currentUser$: Observable<string>;

  category = new Subject();
  currentCategory$: Observable<any>;

  route = new Subject();
  currentRoute$: Observable<any>;

  image = new Subject();
  currentImage$: Observable<any>;

  polygon = new Subject();
  sendedPolygon$: Observable<any>;

  opacity = new Subject();
  currentOpacity$: Observable<any>;

  brightness = new Subject();
  currentBrightness$: Observable<any>;

  polygons = this.tempData.polygons;

  host = 'http://localhost:8000/';

  auth(user: string, pass: string): Promise<AuthResponse> {
    return this.post(this.host + 'api/token/', {
      username: user,
      password: pass
    });
  }

  updatepassword(oldpass: string, newpass: string): Promise<AuthResponse> {
    return this.post(this.host + 'api/users/set_password', {
      old_password: oldpass,
      new_password: newpass
    });
  }


  register(user: string, mail: string, pass: string): Promise<any> {
    return this.post(this.host + 'api/users/', {
      username: user,
      email: mail,
      password: pass
    });
  }
}
