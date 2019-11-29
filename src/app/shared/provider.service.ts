import {EventEmitter, Injectable} from '@angular/core';
import {AuthResponse, Folder, Image, File, User, Profile, Polygon, Comment, SubFolder, Label} from './models/models';
import {HttpClient} from '@angular/common/http';
import {MainService} from './main.service';

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService {

  public sendMessage = new EventEmitter<number>();
  host = 'http://localhost:8000/';

  constructor(http: HttpClient) {
    super(http);
  }

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
