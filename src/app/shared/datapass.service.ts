import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { TempDataService } from './temp-data.service';

@Injectable({
  providedIn: 'root'
})
export class DataPassService {
  user = new BehaviorSubject('anonymous');
  currentUser$: Observable<string>;

  category = new BehaviorSubject(0);
  currentCategory$: Observable<any>;

  constructor(private tempData: TempDataService) {
    this.currentUser$ = this.user.asObservable();
    this.currentCategory$ = this.category.asObservable();
  }
}
