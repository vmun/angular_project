import {Injectable} from '@angular/core';
import {ProviderService} from '../services/provider.service';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Profile} from '../models/models';
import {EMPTY, Observable, of} from 'rxjs';
import {mergeMap, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataresolverService implements Resolve<Profile> {
  private profile: Profile;

  constructor(private cs: ProviderService, private router: Router) {
  }

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    let profile;
    profile = await this.cs.getMyProfile();
    if (profile) {
      console.log(profile);
      return profile;
    } else { // id not found
      this.router.navigate(['auth/login/']);
      return null;
    }


  }


}
