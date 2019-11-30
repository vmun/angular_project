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

  getImagePolygons(imageId): Promise<any[]> {
    return this.get(this.host + 'api2/image/' + imageId + '/polygons/', {});
  }

  postPolygon(polygon: Polygon): Promise<Polygon> {
    const data = [];
    for (let point of polygon.points) {
      data.push([point.offsetX, point.offsetY]);
    }
    return this.post(this.host + 'api2/polygon/', {
      points: JSON.stringify(data),
      label: polygon.label.id,
      text: polygon.text,
      image: polygon.image
    });
  }

  deletePolygon(id: number): Promise<any> {
    return this.delete(this.host + `api2/polygon/${id}/`, {});
  }

  getImages(id: number): Promise<Image[]> {
    return this.get(this.host + `api2/folders/${id}/`, {});
  }

  getSubFolders(id: number): Promise<Folder[]> {
    return this.get(this.host + `api2/folders/${id}/`, {});
  }

  getRootFolders(): Promise<Folder[]> {
    return this.get(this.host + `api/folders/`, {});
  }

  getComment(id: number): Promise<any[]> {
    return this.get(this.host + `api2/image/${id}/comments/`, {});
  }

  postComment(comment: string, imageId: number): Promise<any> {
    return this.post(this.host + 'api2/comment/', {
      text: comment,
      image: imageId
    });
  }

  putComment(comment: string, id: number) {
    return this.put(this.host + `api2/comment/${id}/`, {
      text: comment
    });
  }

  deleteComment(id: number) {
    return this.delete(this.host + `api2/comment/${id}/`, {});
  }

  getLabels(): Promise<Label[]> {
    return this.get(this.host + `api2/labels/`, {});
  }

  postLabel(labelName): Promise<Label> {
    return this.post(this.host + 'api2/labels/', {
      name: labelName
    });
  }
}
