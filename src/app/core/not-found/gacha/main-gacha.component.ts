import {Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy} from '@angular/core';

import {GachaDirective} from './gacha.directive';
import {BannerUnit} from './banner-unit';
import {BannerComponent} from './Banner.component';

@Component({
  selector: 'app-ad-banner',
  template: `
      <div class="ad-banner-example">
          <h3>Oups...</h3>
          <ng-template gacha-host></ng-template>
      </div>
  `
})
export class MainGachaComponent implements OnInit, OnDestroy {
  @Input() ads: BannerUnit[];
  currentAdIndex = -1;
  @ViewChild(GachaDirective, {static: true}) gachaHost: GachaDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    const viewContainerRef = this.gachaHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as BannerComponent).data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 15000);
  }
}
