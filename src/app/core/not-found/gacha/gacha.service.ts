import {Injectable} from '@angular/core';


import {BannerUnit} from './banner-unit';
import {BannerTemplateComponent} from './bannerTemplate.component';

@Injectable()
export class GachaService {
  getBanners() {
    return [
      new BannerUnit(BannerTemplateComponent, {SSR: '10', SR: '12', Name: 'FGO', Path: '../../../assets/fgo.gif'}),

      new BannerUnit(BannerTemplateComponent, {SSR: '12', SR: '16', Name: 'GFL', Path: '../../../assets/gfl.gif'}),

      new BannerUnit(BannerTemplateComponent, {SSR: '12', SR: '16', Name: 'AL', Path: '../../../assets/azure.gif'}),

    ];
  }
}
