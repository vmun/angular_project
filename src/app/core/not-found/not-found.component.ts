import {Component, OnInit} from '@angular/core';
import {GachaService} from './gacha/gacha.service';
import {BannerUnit} from './gacha/banner-unit';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  banners: BannerUnit[];

  constructor(private gachaService: GachaService) {
  }

  ngOnInit() {
    this.banners = this.gachaService.getBanners();
  }

}
