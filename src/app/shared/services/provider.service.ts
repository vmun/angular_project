import {EventEmitter, Injectable} from '@angular/core';
import {
  AuthResponse,
  Folder,
  Image,
  File,
  User,
  Profile,
  Polygon,
  Comment,
  SubFolder,
  Label,
  ImagePack
} from '../models/models';
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
    return this.post(this.host + 'api/login/', {
      username: user,
      password: pass
    });
  }

  updatePassword(oldpass: string, newpass: string): Promise<any[]> {
    return this.post(this.host + 'api/users/set_password/', {
      old_password: oldpass,
      new_password: newpass
    });
  }

  updateMyProfile(newBio: string, newAddress: string, newAvatar: any, id: number): Promise<AuthResponse> {
    return this.put(this.host + `api/profiles/${id}`, {
      bio: newBio,
      address: newAddress,
      avatar: newAvatar
    });
  }

  getMyProfile(): Promise<Profile> {
    return this.get(this.host + `api/profiles/me`, {});
  }

  register(user: string, mail: string, pass: string): Promise<any> {
    return this.post(this.host + 'api/users/', {
      username: user,
      email: mail,
      password: pass
    });
  }

  getImagePolygons(imageId): Promise<any[]> {
    return this.get(this.host + 'api/images/' + imageId + '/my_polygons/', {});
  }

  postPolygon(polygon: Polygon): Promise<Polygon> {
    const data = [];
    for (const point of polygon.points) {
      data.push({x: point.x, y: point.y});
    }
    return this.post(this.host + 'api/polygon/', {
      points: JSON.stringify(data),
      label: polygon.label,
      text: polygon.text,
      image: polygon.image
    });
  }

  deletePolygon(id: number): Promise<any> {
    return this.delete(this.host + `api/polygon/${id}/`, {});
  }

  getImages(id: number): Promise<Image[]> {
    return this.get(this.host + `api/image_packs/${id}/images/`, {});
  }

  getSubFolders(id: number): Promise<Folder> {
    return this.get(this.host + `api/folders/${id}/`, {});
  }

  getRootFolders(): Promise<Folder[]> {
    return this.get(this.host + `api/folders/`, {});
  }

  getAllowedImagePacks(): Promise<ImagePack[]> {
    return this.get(this.host + 'api/image_packs/allowed/', {});
  }

  getAllowedFolders(): Promise<Folder[]> {
    return this.get(this.host + 'api/image_packs/allowed_folders/', {});
  }

  getComment(id: number): Promise<any[]> {
    return this.get(this.host + `api/images/${id}/comments/`, {});
  }

  postComment(comment: string, imageId: number): Promise<any> {
    return this.post(this.host + 'api/comment/', {
      text: comment,
      image: imageId
    });
  }

  putComment(comment: string, id: number) {
    return this.put(this.host + `api/comment/${id}/`, {
      text: comment
    });
  }

  deleteComment(id: number) {
    return this.delete(this.host + `api2/comment/${id}/`, {});
  }

  getLabels(): Promise<Label[]> {
    return this.get(this.host + `api/labels/`, {});
  }

  postLabel(labelName): Promise<Label> {
    return this.post(this.host + 'api/labels/', {
      name: labelName
    });
  }

}
