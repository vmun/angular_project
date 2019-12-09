import { Injectable } from '@angular/core';
import {Polygon} from '../models/models';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {TempDataService} from '../services/temp-data.service';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


interface IReturn {
  polygons: Polygon[];
  dynamicTitle: string;
}


@Injectable({
  providedIn: 'root'
})
export class DatagetService implements Resolve<IReturn> {

  constructor(private _mockService: TempDataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IReturn> | Promise<IReturn> | IReturn {
    // const withError = route.params['with-error'] === 'true';
    // return  Observable.forkJoin ([
    //   this._mockService.dynamicTitle('resolver'),
    //   this._mockService.request(withError)
    // ])
    //   .map(results => ({
    //     dynamicTitle: results[0],
    //     records : results[1]
    //   }))
    //   .catch(error => {
    //     this._ngAlert.push({
    //       message: error.message,
    //       type: MessageType.error
    //     });
    //     return Observable.throw(error);
    //   });
    return null;
  }
}
