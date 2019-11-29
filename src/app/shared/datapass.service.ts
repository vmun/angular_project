import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import { TempDataService } from './temp-data.service';
import {MainService} from './main.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataPassService extends MainService {
  user = new BehaviorSubject('anonymous');
  currentUser$: Observable<string>;

  category = new BehaviorSubject(0);
  currentCategory$: Observable<any>;

  image = new BehaviorSubject(0);
  currentImage$: Observable<any>;

  constructor(private tempData: TempDataService, http: HttpClient) {
    super(http);
    this.currentUser$ = this.user.asObservable();
    this.currentImage$ = this.image.asObservable();
    this.currentCategory$ = this.category.asObservable();
  }

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
