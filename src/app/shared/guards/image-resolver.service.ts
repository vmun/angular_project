import { Injectable } from '@angular/core';
import {Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Image} from '../models/models';
import {ProviderService} from '../services/provider.service';




@Injectable({
  providedIn: 'root'
})
export class ImageResolverService implements Resolve<Image[]> {

  constructor(private provider: ProviderService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Image[]> {
    console.log('1');
    return this.provider.getImages(+route.paramMap.get('id'));
  }

}
